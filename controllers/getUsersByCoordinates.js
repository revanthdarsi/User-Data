/**
 * Fetches all the users present in the coordinates sorted by distance.
 * @date 2021/12/06
 * @author Revanth Darsi<revanth2000516@gmail.com>
 * @method getUsersCoordinates
 * @param {Context-> Which can access all inputs,userModel->User Model}
 * This function uses $near which will find the people that are present near its location and automatically they are sorted by distance.
 * @Input Takes coordinates as input from query params.
 * @returns {Array} response
 */


module.exports = getUsersCoordinates = async (ctx, user) => {
  try {
    const coordinates = JSON.parse(ctx.params.coordinates);

    const options = {
      location: {
        $near: {
          type: "Point",
          coordinates: coordinates,
        },
      },
    };
    const data = await user.find(options);
    ctx.status = 200;
    ctx.body = data;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.message = "Internal Server Error";
  }
};
