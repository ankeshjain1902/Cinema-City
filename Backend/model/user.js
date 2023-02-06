class User {
    constructor(obj) {
      this.name = obj.name;
      this.emailId = obj.emailId;
      this.mobile = obj.mobile;
      this.password = obj.password;
      this.id = obj.id;
    }
  }
  
module.exports = User;