const express = require("express");
const router = express.Router();

const subscriptionRoutes = require("./subscription.routes");

const holderRoutes = require("./holder.routes");

const defaultRoutes = [
  {
    path: "/subscription",
    route: subscriptionRoutes,
  },

  {
    path: "/holder",
    route: holderRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
