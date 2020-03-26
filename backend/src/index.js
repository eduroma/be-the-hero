const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json()); //Indica que as requisições serão realizadas em formato JSON;
app.use(routes);

app.listen(3333, () => console.log("Server is running at port " + 3333));
