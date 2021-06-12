/**
 * Creates An User
 * @date 2021/12/06
 * @author Revanth Darsi<revanth2000516@gmail.com>
 * @method createUser
 * @param {Context-> Which can access all inputs,userModel->User Model}
 * This function first checks the user present or not in the database and if it is found it doesn't create and if it not found it creates user.
 * @Input Takes JSON Input.
 * @returns {Text} response
 */

module.exports = createUser = async (ctx, userModel) => {
  try {
    const body = ctx.request.body;
    const mobileNumber = body.mobile;
    const find = await userModel.findByMobile(mobileNumber);
    if (!find) {
      const user = new userModel();
      user.name = body.name;
      user.mobile = body.mobile;
      user.email = body.email;
      user.address.street = body.street;
      user.address.localitiy = body.localitiy;
      user.address.city = body.city;
      user.address.state = body.state;
      user.address.pincode = body.pincode;
      user.address.coordinatesType = body.coordinatesType;
      user.address.coordinates = body.coordinates;
      user.location.type = body.coordinatesType;
      user.location.coordinates = body.coordinates;
      await user.save();
      ctx.status = 200;
      ctx.message = "User Created Successfully";
    } else {
      ctx.status = 400;
      ctx.message = "User Already Present";
    }
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.message = "Internal Server Error";
  }
};
