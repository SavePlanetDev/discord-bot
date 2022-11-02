const express = require("express");
const port = process.env.PORT | 3000;
const cors = require("cors");
const router = require("./routers/v1");

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

const app = express();

const whitelist = ['http://68.183.176.4:3001', 'http://68.183.176.4:3002']
const corsOptions = {
          origin: function (origin, callback) {
                    if (whitelist.indexOf(origin) !== -1 || !origin) {
                      callback(null, true)
                    } else {
                      callback(new Error('Not allowed by CORS'))
                    }
                  }
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
