const koa_router = require("koa-router");
const router = new koa_router();
const deleteUser = require("../controllers/deleteUser.controller");
const userModel = require("../models/user");

router.get("/delete/:mobile", async (ctx, next) => {
  await deleteUser(ctx, userModel);
});

module.exports = router;
