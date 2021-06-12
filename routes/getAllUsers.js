const koa_router = require("koa-router");
const router = new koa_router();
const getAllUser = require("../controllers/getAllUsers");
const userModel = require("../models/user");

router.get("/users", async (ctx, next) => {
  await getAllUser(ctx, userModel);
});

module.exports = router;
