/**
 * Updates user in the collection
 * @date 2021/12/06
 * @author Revanth Darsi<revanth2000516@gmail.com>
 * @method updateUser
 * @param {Context-> Which can access all inputs,userModel->User Model}
 * This function checks user is already present or not and updates the user if present.
 * @Input JSON
 * @returns {Text} response
 */

module.exports = updateUser = async (ctx, user) => {
  try {
    const body = ctx.request.body;
    const find = await user.findByMobile(mobileNumber);
    if (find) {
      await user.updateOne(
        { _id: find._id },
        {
          name: body.name,
          mobile: body.mobile,
          email: body.email,
          "address.street": body.street,
          "address.localitiy": body.localitiy,
          "address.city": body.city,
          "address.state": body.state,
          "address.pincode": body.pincode,
          "address.coordinatesType": body.coordinatesType,
          "address.coordinates": body.coordinates,
          "user.location.type": body.coordinatesType,
          "user.location.coordinates": body.coordinates,
        }
      );
      ctx.status = 200;
      ctx.message = "User Updated Successfully.";
    } else {
      ctx.status = 400;
      ctx.message = "User Not Found.";
    }
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.message = "Internal Server Error";
  }
};
