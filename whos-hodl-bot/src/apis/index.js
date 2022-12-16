require("dotenv").config();
const express = require("express");
const port = process.env.PORT | 3001;
const cors = require("cors");
const router = require("./routers/v1");

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require(`${
    process.env.production == "PROD" ? "./swagger.json" : "./swagger_dev.json"
  }`);

const app = express();

const whitelist =
  process.env.production == "PROD"
    ? [
        "http://157.245.152.83:3001",
        "http://157.245.152.83:3002",
        "http://157.245.152.83:3003",
        "http://localhost:3000",
      ]
    : [
        "http://localhost/3001",
        "http://localhost:3002",
        "http://localhost:3000",
      ];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/v1", router);

app.listen(port, () =>
  console.log("APIS: API server conected on port: ", port)
);

module.exports = app;
