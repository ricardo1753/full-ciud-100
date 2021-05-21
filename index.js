const express = require("express");
const path = require("path");
const fs = require("fs");

let datos = require("./server/datos_mem.json");

//aqui se crea el servidor
const server = express();
const port = 8080;

const salvarDatos = (datos) => {
  const textToWrite = JSON.stringify(datos);
  fs.writeFileSync("./server/datos_mem.json", textToWrite);
};

//decirle al servidor que todo lo que entra debe ser en formato json
server.use(express.json()); //express.json es un global middleware

//ruta para los datos
server.get("/datos", (req, res) => {
  res.sendFile(path.join(__dirname, "server/datos_mem.json"));
});

//para adicionar una pregunta
server.post("/pregunta", (req, res) => {
  datos.datos.unshift(req.body);
  salvarDatos(datos);
  res.send(datos);
});

//para borrar una pregunta
server.delete("/pregunta", (req, res) => {
  const { pregunta } = req.body;
  if (pregunta) {
    const datosFiltrados = datos.datos.filter((p) => {
      return p.pregunta !== pregunta;
    });
    datos.datos = datosFiltrados;
    salvarDatos(datos);
    res.send(datos);
  } else {
    res.status(400).send("Please, provide a question!");
  }
});

//servir archivos estaticos (los del cleinte)
server.use(express.static(path.join(__dirname, "client/build")));

//catch all react request (redirecionando al index.html)
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

//ahora lo que corre el servidor
server.listen(port, () => {
  console.log(`> Server is running on port: ${port}`);
});
