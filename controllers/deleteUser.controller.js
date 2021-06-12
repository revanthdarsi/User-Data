/**
 * Deletes An User
 * @date 2021/12/06
 * @author Revanth Darsi<revanth2000516@gmail.com>
 * @method deleteUser
 * @param {Context-> Which can access all inputs,userModel->User Model}
 * This function checks the user first and then delete's the user if present.
 * @Input Takes Mobile Number From QueryParams
 * @returns {Text} response
 */

module.exports = deleteUser = async (ctx, user) => {
  try {
    const mobileNumber = ctx.params.mobile;
    const find = await user.findByMobile(mobileNumber);
    if (find) {
      await user.deleteOne({ mobile: mobileNumber });
      ctx.status = 200;
      ctx.message = "User Deleted Successfully";
    } else {
      ctx.status = 400;
      ctx.message = "User Not Found";
    }
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.message = "Internal Server Error";
  }
};
