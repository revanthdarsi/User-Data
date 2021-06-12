const koa_router = require("koa-router");
const router = new koa_router();
const createUser = require("../controllers/createUser.controller");
const userModel = require("../models/user");

router.post("/create", async (ctx, next) => {
  await createUser(ctx, userModel);
});

module.exports = router;
