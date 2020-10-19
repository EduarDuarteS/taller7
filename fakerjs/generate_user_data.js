const faker = require('faker');
const fs = require('fs')

function generateUsers() {

  let users = []

  for (let id=1; id <= 50; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let username = faker.internet.userName();
    let password = faker.internet.password();
    let description = faker.lorem.paragraph();

    users.push({
        "id" : id,
        "first_name" : firstName,
        "last_name" : lastName,
        "email" : email,
        "username" : username,
        "password" : password,
        "description" : description
    });
  }

  return { "data": users }
}

let dataObj = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));