const jwt = require("jsonwebtoken");

exports.getAllStyleGuides = async (req, res) => {
  try {
    const connection = req.dbConnection;
    const getData = () => {
      return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM styleguide", (err, rows) => {
          if (err) reject("Failed to fetch data");
          resolve(rows);
        });
      });
    };
    const data = await getData();
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

// FIX ME
// exports.createStyleGuides = async (req, res) => {
//   try {
//     const token = await req.cookies.token;
//     const connection = req.dbConnection;
//     const name = req.body.name;
//     if (!token) {
//       //eror handling
//     } else {
//       jwt.verify(token, "jwt-secret-token", (err, decoded) => {
//         if (err) {
//           //eror handling
//         } else {
//           const userId = decoded.id;

//           if (name) {
//             connection.query(
//               "INSERT INTO `styleguide` ( `user_id`, `name`, `created_at`) VALUES ( ?, ?, CURRENT_TIMESTAMP)",
//               [userId, name],
//               (err, result) => {
//                 if (err) {
//                   console.log(`Error : ${err.message}`);
//                   return res.status(500).json({
//                     status: "Error",
//                     message: err.message,
//                   });
//                 }

//                 res.status(201).json({
//                   status: "success",
//                   message: "Styleguide created successfully",
//                   id: result.insertId,
//                 });

//                 connection.release();
//               }
//             );
//           }
//         }
//       });
//     }
//   } catch (err) {
//     console.error("Unexpected error:", err);
//     res.status(500).json({
//       status: "error",
//       message: "Internal Server Error",
//     });
//   }
// };

exports.createStyleGuides = async (req, res) => {
  try {
    const token = await req.cookies.token;
    const connection = await req.dbConnection;
    const name = await req.body.name;

    const addStyleGuide = () => {
      return new Promise((resolve, reject) => {
        if (!token) reject("No Token provided");
        if (!name) reject("No Name provided");
        jwt.verify(token, "jwt-secret-token", (err, decoded) => {
          const userId = decoded.id;
          const organization_id = decoded.organization_id;
          if (err) reject(err);

          connection.query(
            "INSERT INTO `styleguide` ( `user_id`,organization_id, `name`, `created_at`) VALUES ( ?,?, ?, CURRENT_TIMESTAMP)",
            [userId, organization_id, name],
            (err, result) => {
              if (err) reject(err);
              resolve(result);
            }
          );
        });
      });
    };

    const addDefaultCategory = (id) => {
      return new Promise((resolve, reject) => {
        connection.query(
          "INSERT INTO `category` ( `styleguide_id`,`name`, `created_at`) VALUES (?,'Getting Started', CURRENT_TIMESTAMP)",
          [id],
          (err, result) => {
            if (err) reject(err);
            resolve(result);
          }
        );
      });
    };

    const addDefaultPage = (id) => {
      return new Promise((resolve, reject) => {
        connection.query(
          "INSERT INTO `page` ( `category_id`,`name`,`created_at`) VALUES (?,'Introduction', CURRENT_TIMESTAMP)",
          [id],
          (err, result) => {
            if (err) reject(err);
            resolve(result);
          }
        );
      });
    };

    const result = await addStyleGuide();
    const category = await addDefaultCategory(result.insertId);
    const page = await addDefaultPage(category.insertId);
    res.status(201).json({
      status: "success",
      message: "Styleguide created successfully",
      id: result.insertId,
    });
    connection.release();
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.getStyleGuide = async (req, res) => {
  try {
    const connection = req.dbConnection;
    const id = req.params.id;

    const getStyleGuide = () => {
      return new Promise((resolve, reject) => {
        connection.query(
          "SELECT * FROM styleguide WHERE id = ?",
          id,
          (err, rows) => {
            if (err) reject("Failed to fetch data");
            resolve(rows[0]);
          }
        );
      });
    };

    const getCategories = () => {
      return new Promise((resolve, reject) => {
        connection.query(
          `SELECT *  FROM category WHERE styleguide_id = ?`,
          id,
          (err, rows) => {
            if (err) reject("Failed to fetch data");
            resolve(rows);
          }
        );
      });
    };

    const getPages = (categories) => {
      return new Promise((resolve, reject) => {
        const temp = [];
        categories.forEach((category) => {
          temp.push("?");
        });
        connection.query(
          `SELECT *  FROM page WHERE category_id IN (${temp.join(", ")})`,
          categories,
          (err, rows) => {
            if (err) reject("Failed to fetch data");
            resolve(rows);
          }
        );
      });
    };

    const getElements = (id) => {
      return new Promise((resolve, reject) => {
        connection.query(
          "SELECT * FROM element WHERE page_id = ?",
          id,
          (err, rows) => {
            if (err) reject("Failed to fetch data");
            resolve(rows);
          }
        );
      });
    };

    const styleguide = await getStyleGuide();
    const categories = await getCategories();
    const categoriesId = [];
    categories.forEach((category) => {
      categoriesId.push(category.id);
      category.page = [];
    });
    const pages = await getPages(categoriesId);
    categories.forEach((category) => {
      pages.forEach((page) => {
        if (page.category_id === category.id) {
          category.page.push(page);
        }
      });
    });
    const elements = await getElements(pages[0].id);
    console.log(elements);

    const data = {
      styleguide,
      categories,
      elements,
    };

    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: `Failed to fetch style guide: ${err.message}`,
    });
  }
};

exports.createPages = async (req, res) => {
  res.status(200).json({
    message: `Successfully created`,
  });
};
