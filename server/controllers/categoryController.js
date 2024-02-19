exports.createCategory = async (req, res) => {
  try {
    const connection = req.dbConnection;
    const name = req.body.name;
    const id = req.params.id;
    const result = () => {
      return new Promise((resolve, reject) => {
        connection.query(
          "INSERT INTO `category` ( `styleguide_id`,`name`, `created_at`) VALUES (?, ?, CURRENT_TIMESTAMP)",
          [id, name],
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
    const category = await result();
    connection.release();
    res.status(201).json({
      status: "success",
      message: "Page Created Successfully",
      id: category.insertId,
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
