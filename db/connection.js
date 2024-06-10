//Importacion de dependencias mysql
const mysql = require("mysql");

//Funcion para conectarse a la base de datos
//Configuracion de la base de datos
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restaurant",
  port: "3306"
});
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

//Se exporta la funcion para que sea utilizada en otros archivos
module.exports = connection;