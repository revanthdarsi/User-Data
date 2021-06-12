const koa_router = require("koa-router");
const router = new koa_router();
const getUsersByTimeStamp = require("../controllers/pagination/getUsersByTimestamp");
const userModel = require("../models/user");

router.get("/pagination/:pageNumber/:pageSize", async (ctx, next) => {
  await getUsersByTimeStamp(ctx, userModel);
});

module.exports = router;
