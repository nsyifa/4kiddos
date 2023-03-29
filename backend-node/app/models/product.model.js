const sql = require("./db.js");

// constructor
const Database = function (database) {
  // this.product_id = product.product_id;
  // this.name = product.name;
  // this.price = product.price;
  // this.stock = product.stock;
  // this.rating = product.rating;
  // this.weight = product.weight;
  // this.dimensions = product.dimensions;
  // this.color = product.color;
  // this.age = product.age;
  // this.category = product.category;
  // this.brand = product.brand;
};

Database.getAllProducts = (result) => {
  sql.query("CALL spShowProducts()", (err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
      return;
    }

    console.log("products:", res);
    result(null, res);
  });
};

Database.getLatestCustomer = (result) => {
  sql.query("CALL spGetLatestCustomer()", (err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
      return;
    }

    console.log("customer:", res);
    result(null, res);
  });
};

Database.getCustomerFromEmail = (email, result) => {
  sql.query(`CALL spGetCustomerFromEmail('${email}')`, email, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(null, err);
      return;
    }

    console.log("customer:", res);
    result(null, res);
  });
};

Database.createCustomer = (newCustomer, result) => {
  sql.query("INSERT INTO customer SET ?", newCustomer, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tutorial: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

module.exports = Database;
