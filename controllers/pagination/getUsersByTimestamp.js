/**
 * Gets All Users Sorted By Timestamp
 * @date 2021/12/06
 * @author Revanth Darsi<revanth2000516@gmail.com>
 * @method getByTimestamp
 * @param {Context-> Which can access all inputs,userModel->User Model}
 * This function will return all the users present in collection sorted by timestamp and limited by page number and page size.
 * @Input Takes pagenumber and pagesize as inputs
 * @returns {Array} response
 */

module.exports = getByTimestamp = async (ctx, user) => {
  try {
    const pageNumber = parseInt(ctx.params.pageNumber);
    const pageSize = parseInt(ctx.params.pageSize);
    const skips = (pageNumber - 1) * pageSize;
    const users = await user
      .find({})
      .sort({ createAt: -1 })
      .skip(skips)
      .limit(pageSize);
    ctx.status = 200;
    ctx.body = users;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
    ctx.message = "Internal Server Error";
  }
};
