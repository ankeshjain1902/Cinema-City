const mongoose = require("mongoose");
const { async } = require("rxjs");
// const Schema = mongoose.Schema;


const url = "mongodb://localhost:27017/MoviesBookingDB";

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/tweetUp");

const userSchema = new mongoose.Schema(
    {
        id: {
          type: String,
          required: true,
          unique: true,
        },
        name: {
          type: String,
          required: true,
          unique: true,
        },
        emailId: {
          type: String,
          required: true,
          unique: true,
        },
        mobile: {
          type: Number,
          required: true,
          unique: true,
        },
        password: {
          type: String,
          required: true,
        }
    }
);

const movieSchema = new mongoose.Schema(
    {
      id: {
        type: Number,
        required: true,
        unique: true,
      },
      movieName: {
        type: String,
        required: true,
      },
      Year: {
        type: String,
      },
      Released: {
        type: String,
      },
      Runtime: {
        type: String,
      },
      Director: {
        type: String,
      },
      Writer: {
        type: String,
      },
      Language: {
        type: String,
      },
      Country: {
        type: String,
      },
      Awards: {
        type: String,
      },
      Metascore: {
        type: String,
      },
      imdbRating: {
        type: String,
      },
      Plot: {
        type: String,
      },
      imagePath: {
        type: String,
      },
      Genre: {
        type: String,
      },
      Actors: {
        type: String,
      }
    }
);
  
const bookSchema = new mongoose.Schema(
    {
      id: {
        type: String,
        required: true,
        unique: true,
      },
      seats: {
        type: Array,
        required: true,
      },
      numberOfSeat: {
        type: Number,
      },
      amount: {
        type: Number,
      },
      cartId: {
        type: String,
      },
      eventId: {
        type: Number,
      },
      date: {
        type: String,
      },
      time: {
        type: String,
      },
      theatre: {
        type: String,
      },
      userId: {
        type: String,
        required: true,
      }
    }
);

let collection = {}; 


// let dbConnection = mongoose.connect(url, {useNewUrlParser: true});


collection.getMoviesCollection = async () => {

    // let dbConnection = await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
    let model = await mongoose.model("movies", movieSchema);
    return model;
 
} 

collection.getUsersCollection = async () => {

    // let dbConnection = await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
    let model = await mongoose.model("users", userSchema);
    return model;
  
} 

collection.getBookCollection = async () => {

    // let dbConnection = await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
    let model = await mongoose.model("book", bookSchema);
    return model;
 
}



module.exports = collection;