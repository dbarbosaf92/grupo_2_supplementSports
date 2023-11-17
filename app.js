// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require("express");
const app = express();

// Modulo nativo para manejar las rutas de los archivos
const path = require("path");

// Usando recursos estáticos.
app.use(express.static("public"));

// Ponemos a escuchar el servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"));
});

app.get("/productCart", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/productCart.html"));
});

app.get("/productDetail", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/productDetail.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/register.html"));
});

