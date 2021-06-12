const koa = require("koa");
const app = new koa();
const koa_router = require("koa-router");
const router = new koa_router();
const dotEnv = require("dotenv");
dotEnv.config();
const cors = require("@koa/cors");
const koaRequest = require("koa-http-request");
const bodyParser = require("koa-bodyparser");
const formidable = require("koa2-formidable");
const dataBaseConnection = require("./controllers/database.controller");
const createUser = require("./routes/create");
const updateUser = require("./routes/update");
const deleteUser = require("./routes/delete");
const getAllUsers = require("./routes/getAllUsers");
const getAllUsersByTimeStamp = require("./routes/getAllUsersByTimeStamp");
const getAllUsersByCoordinates = require("./routes/getAllUsersByCoordinates");

/* Middleware For NPM Packages */

app.use(formidable({}));
app.use(bodyParser());
app.use(cors());
app.use(
  koaRequest({
    dataType: "json",
  })
);

dataBaseConnection(); //dataBase Connection

/* Middleware For All The Routes*/

app.use(createUser.routes(), createUser.allowedMethods());
app.use(updateUser.routes(), updateUser.allowedMethods());
app.use(deleteUser.routes(), deleteUser.allowedMethods());
app.use(getAllUsers.routes(), getAllUsers.allowedMethods());
app.use(
  getAllUsersByTimeStamp.routes(),
  getAllUsersByTimeStamp.allowedMethods()
);
app.use(
  getAllUsersByCoordinates.routes(),
  getAllUsersByCoordinates.allowedMethods()
);

/* Starts The Server*/

app.listen(process.env.PORT, () => {
  console.log("server started " + process.env.PORT);
});
