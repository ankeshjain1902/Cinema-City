const express = require('express');
const routing = express.Router();
const create = require('../model/dbsetup')
const bookingService = require('../service/service')
const User = require('../model/user')
const Book = require('../model/book')


// setup db mongoose db (ye routing app.js m bhi kr skte h)
routing.get("/setupDb", async (req, res, next) => {
    try {
      let data = await create.setupDb();
      res.send(data);
    } catch (error) {
      next(error);
    }
});




routing.get("/movies", async (req, res, next) => {
  try {
    
    let movie = await bookingService.getAllMovies();
    res.json(movie);
    
  } catch (error) {
    next(error);
  }
})


routing.post("/users", async (req, res, next) => {
  try {
    let user = new User(req.body);
    let insertUser = await bookingService.registerUser(user);
    console.log(insertUser);
    res.json(insertUser);
  } catch (error) {
    next(error);
  }
})


routing.get("/users", async (req, res, next) => {
  try {
    if (req.query.emailId && req.query.password) {
      let userValidate = await bookingService.getUserVerfied(req.query.emailId, req.query.password);
      res.send(userValidate);
    } else if (req.query.emailId) {
      let user = await await bookingService.getUserByEmail(req.query.emailId);
      res.json(user);
    } else {
      res.status(404).json({ message: "Route not Found" });
    }
  } catch (error) {
    next(error);
  }
});

routing.post("/book", async (req, res, next) => {
  try{
    let bookObj = new Book(req.body);
    let bookSeat = await bookingService.bookMovie(bookObj);
    // console.log(bookSeat);
    res.json(bookSeat);
  } catch (error) {
    next(error);
  } 
});

// Additional Story for getting booking details
routing.get("/book", async (req, res, next) => {
  try {
    const emailId = req.query.emailId;
    let data = await bookingService.getBookingDetails(emailId);
    res.send(data);
  } catch (error) {
    next(error);
  }
});




module.exports = routing;