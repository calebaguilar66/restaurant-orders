const express = require("express");
const router = express.Router();
const Order = require("../models/order");

// Mostrar el formulario para crear un nuevo pedido
router.get('/new', (req, res) => {
  //Renderiza la vista llamada new.ejs
  res.render('new');
});

//Formulario para agregar un pedido
router.post("/new", (req, res) => {
  const { tableNumber, items } = req.body; //Se reciben los datos ingresados del formulario como objetos JSON
  if (!tableNumber || !items || !Array.isArray(items)) {
    return res.status(400).send("Invalid input");//En dado caso de que falte un campo por rellenar enviara un mensaje de error de Invalid input
  }
  const subtotal = items.reduce( // Se saca el valor de subtotal (Precio total sin propina) segun el precio por cantidad del pedido
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal * 1.1; // Precio total con propina: Incluye la propina del 10%
  Order.createOrder(tableNumber, items, subtotal, total, (err, orderId) => {// Se utiliza la funcion createOrder que interactua con la base de datos para insertar los datos en la tabla orders
    if (err) {
      return res.status(500).send("Error creating order");
    } //Aqui termina el bloque de codigo en el caso de que haya un error al crear una orden, caso contrario envia el mensaje "orden creada con su id correspondiente"
    res.status(201).send(`Order created with ID: ${orderId}`);
  });
});
//Se exporta las rutas de orders para importarlas en el servidor app.js
module.exports = router;
