const koa_router = require("koa-router");
const router = new koa_router();
const updateUser = require("../controllers/updateUser.controller");
const userModel = require("../models/user");

router.post("/update", async (ctx, next) => {
  await updateUser(ctx, userModel);
});

module.exports = router;
