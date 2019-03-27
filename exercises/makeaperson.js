const Person = function(firstAndLast) {
  let firstName = firstAndLast.split(" ").shift();
  // console.log(firstName);
  let lastName = firstAndLast.split(" ").pop();
  // console.log(lastName);

  this.setFirstName = function(name) {
    firstName = name;
  };

  this.getFirstName = function() {
    return firstName;
  };

  this.setLastName = function(name) {
    lastName = name;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.setFullName = function(name) {
    firstName = name.split(" ").shift();
    lastName = name.split(" ").pop();
  };

  this.getFullName = function() {
    return firstName + " " + lastName;
  };
};

var vic = new Person("Victor Rene");
console.log(vic.getFullName());
vic.setFullName("Sidious Vic");
console.log(vic.getFullName());
vic.setFirstName("Vic");
console.log(vic.getFirstName());
vic.setLastName("Sidious");
console.log(vic.getLastName());
console.log(vic.getFullName());
