const koa_router = require("koa-router");
const router = new koa_router();
const getUsersByCoordinates = require("../controllers/getUsersByCoordinates");
const userModel = require("../models/user");

router.get("/userByCoordinates/:coordinates", async (ctx, next) => {
  await getUsersByCoordinates(ctx, userModel);
});

module.exports = router;
