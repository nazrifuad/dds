exports.createPage = async (req, res) => {
  try {
    //need to check if category exist firrst or not
    const connection = req.dbConnection;
    const name = req.body.name;
    const category_id = req.params.category_id;
    const result = () => {
      return new Promise((resolve, reject) => {
        connection.query(
          "INSERT INTO `page` ( `category_id`,`name`, `created_at`) VALUES (?, ?, CURRENT_TIMESTAMP)",
          [category_id, name],
          (err, result) => {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          }
        );
      });
    };
    const page = await result();
    connection.release();
    res.status(201).json({
      status: "success",
      message: "Page Created Successfully",
      id: result.insertId,
    });
  } catch (err) {
    if (connection) connection.release();
    console.error("Unexpected error:", err);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.getPage = async (req, res) => {
  try {
    const connection = req.dbConnection;
    const page_id = req.params.id;
    const result = () => {
      return new Promise((resolve, reject) => {
        connection.query(
          "SELECT *  FROM `page` WHERE `id` = ?",
          [page_id],
          (err, result) => {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          }
        );
      });
    };
    const page = await result();
    connection.release();
    res.status(201).json({
      status: "success",
      message: "Page Created Successfully",
      data: page[0],
    });
  } catch (err) {
    if (connection) connection.release();
    console.error("Unexpected error:", err);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
