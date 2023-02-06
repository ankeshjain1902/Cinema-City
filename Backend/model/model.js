const dbModel = require('../utilities/connection');

const moviesBookingDb= {};


//show movie details
moviesBookingDb.getAllMovies = async() => {
    let moviesCollection = await dbModel.getMoviesCollection();
    return moviesCollection.find();
}


//register user
moviesBookingDb.registerUser = async (userObj) => {
    userObj.id = await moviesBookingDb.generateUserId();
    let usersCollection = await dbModel.getUsersCollection();
    console.log(userObj)
    let insertedUser = await usersCollection.create(userObj);

    if (insertedUser) {
      return insertedUser;
    } else {
      return null;
    }
};

//generate user id
moviesBookingDb.generateUserId = () => {
  return dbModel.getUsersCollection().then((model) => {
    return model.distinct("id").then((ids) => {
      let id = Math.max(...ids);
      return id + 1;
    });
  });
};

//get user's email
moviesBookingDb.getUserByEmail = async (emailId) => {
  let model = await dbModel.getUsersCollection();
  let user = await model.findOne({
    emailId: emailId,
  });
  return user ? user : null;
};

//user verification
moviesBookingDb.getUserVerfied = async (emailId, password) => {
  let model = await dbModel.getUsersCollection();
  let user = await model.findOne({
    $and: [{ emailId: emailId }, { password: password }],
  });
  return user ? true : false;
};

//book movie ticket 
moviesBookingDb.bookMovie = async (bookObj) => {
  bookObj.id = await moviesBookingDb.generateBookId();
  let booksCollection= await dbModel.getBookCollection();
  console.log(bookObj);
  let bookDetails = await booksCollection.create(bookObj);
  // console.log(bookDetails);
  if(bookDetails){
    return bookDetails;
  }else{
    return null;
  }
};

//generate booking id
moviesBookingDb.generateBookId = () => {
  return dbModel.getBookCollection().then((model) => {
    return model.distinct("id").then((ids) => {
      let id = Math.max(...ids);
      return id + 1;
    });
  });
};

//get booking details
moviesBookingDb.getBookingDetails = async(userId)=>{
  let model = await dbModel.getBookCollection();
  let data = await model.find({userId});
  return data;
};









module.exports = moviesBookingDb;