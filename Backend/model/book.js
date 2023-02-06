class Book {
    constructor(obj) {
      this.emailId = obj.emailId;
      this.seats = obj.seats;
      this.numberOfSeat = obj.numberOfSeat;
      this.amount = obj.amount;
      this.cartId = obj.cartId;
      this.eventId = obj.eventId;
      this.date = obj.date;
      this.time = obj.time;
      this.theatre = obj.theatre;
      this.id = obj.id;
      this.userId = obj.userId;
    }
  }
  
  module.exports = Book;