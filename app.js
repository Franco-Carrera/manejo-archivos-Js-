const Manager = require("./classes/Manager");

const manager = new Manager();

/*
manager
  .createEvent({
    title: "Murga",
    location: "El planetario",
    price: 1220,
    capacity: 6,
  })
  .then((result) => {
    console.log(result.message);
  });
*/

manager.getById("QUBajdH").then((result) => {
  console.log(result.event);
});

manager.registerUser({ name: "Franco", last_name: "Alejandro", age: "18" });
