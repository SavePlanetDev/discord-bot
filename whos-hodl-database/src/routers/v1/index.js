const express = require("express");
const router = express.Router();

const subscriptionRoutes = require("./subscription.routes");
const projectsRoutes = require("./project.routes");
const holderRoutes = require("./holder.routes");

let defaultRoutes = [];

if (process.env.production == "PROD") {
  defaultRoutes = [
    {
      path: "/subscription",
      route: subscriptionRoutes,
    },
    {
      path: "/project",
      route: projectsRoutes,
    },
    {
      path: "/holder",
      route: holderRoutes,
    },
  ];
} else {
  defaultRoutes = [
    {
      path: "/subscription",
      route: subscriptionRoutes,
    },
    {
      path: "/project",
      route: projectsRoutes,
    },
    {
      path: "/holder",
      route: holderRoutes,
    },
  ];
}

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
