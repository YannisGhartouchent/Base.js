const { faker } = require("@faker-js/faker/local/fr");

var peoples = [
  {
    firstName: "Edouard",
    lastName: "Luc",
  },
];

for (var i = 0; i < 25; i++) {
  //var sex_people = faker.person.sex()
  peoples.push({
    firstName: faker.person.firstName("male"),
    lastName: faker.lastName("male"),
    //email: faker.internet.email({firstName: firstName, lastName: lastName})
  });
}

console.log(peoples);

console.log(faker.person.firstName());
console.log(faker.person.lastName());
