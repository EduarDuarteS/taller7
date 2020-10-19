const faker = require('faker');

let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
let jobTitle = faker.name.jobTitle();
let phone = faker.phone.phoneNumber();

console.log(`Employee: ${firstName} ${lastName}`);
console.log(`Job title: ${jobTitle}`);
console.log(`Phone: ${phone}`);