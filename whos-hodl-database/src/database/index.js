const database = require("./database");

database
  .sync()
  .then(() => console.log("DATABASE: Database Connected Successfully"))
  .catch((e) => console.log(e));
