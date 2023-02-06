const db = require('../model/model');

let bookingService = {};

bookingService.getAllMovies = async () => {
    let movies = await db.getAllMovies();
    if (movies.length > 0) {
      return movies;
    } else {
      throwError("No movies at present at the current time", 404);
    }
};

bookingService.registerUser = async (userObj) => {
  let user = await db.registerUser(userObj);
  return user;
}

bookingService.getUserByEmail = async (emailId) => {
  let user = await db.getUserByEmail(emailId);
  // console.log(user);
  return user;
};

bookingService.getUserVerfied = async (emailId, password) => {
  let userValidate = await db.getUserVerfied(emailId, password);
  return userValidate;
};

bookingService.bookMovie = async (bookObj) => {
  let booking = await db.bookMovie(bookObj);
  return booking;
};

bookingService.getBookingDetails = async(emailId)=>{
  let user = await db.getUserByEmail(emailId);
  let data = await db.getBookingDetails(user.id);
  return data;
}


module.exports = bookingService;