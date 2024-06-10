const db = require("../db/connection");
//Funcion para crear la orden, dicha funcion se utiliza en el endpoint para crear un nuevo pedido
const createOrder = (tableNumber, items, subtotal, total, callback) => {
  const sql =
    "INSERT INTO orders (table_number, items, subtotal, total) VALUES (?, ?, ?, ?)"; //Funcion SQL Para insertar datos en la tabla orders
  db.query(
    sql,
    [tableNumber, JSON.stringify(items), subtotal, total],
    (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result.insertId);
    }
  );
};

//Se exporta la funcion para que sea utilizada en otros archivos
module.exports = {
  createOrder
};
