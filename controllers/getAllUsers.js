/**
 * Fetches all the users present in the collection.
 * @date 2021/12/06
 * @author Revanth Darsi<revanth2000516@gmail.com>
 * @method getAllUsers
 * @param {Context-> Which can access all inputs,userModel->User Model}
 * This function basically calls the static method that is present in the user schema.
 * @Input
 * @returns {Array} response
 */

module.exports = getAllUsers = async (ctx, user) => {
  try {
    const allUsers = await user.getUsers();
    ctx.status = 200;
    ctx.body = allUsers;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.message = "Internal Server Error";
  }
};
