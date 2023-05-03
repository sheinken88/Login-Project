const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/index");
// const models = require("./models/index");
const routes = require("./routes/index");

app.use(cors());

app.use(express.json());

app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    app.listen(5000, () => {
      console.log("Servidor escuchando en el puerto 5000");
    });
  })
  .catch(console.error);
