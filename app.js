//Importacion de librerias/dependencias
const express = require("express");
const bodyParser = require("body-parser");
const ordersRouter = require("./routes/orders");
const app = express();
const path = require('path');
const PORT = 3000;

//Configuracion de motor de plantilla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));//path.join me permite unir directorios, en el caso de que se tuviera muchas vistas, y para no llamarlas uno por uno en el sistema, simplemente se utiliza la funcion path.join para llamar a todas las vistas en views.


//Configuracion de Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas
app.use("/orders", ordersRouter);


//Servidor iniciando
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
