function User(id, firstName, lastName, email, zip_code, city, state) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.zip_code = zip_code;
  this.city = city;
  this.state = state;
};

module.exports = { User };