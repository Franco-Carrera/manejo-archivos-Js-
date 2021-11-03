const Manager = require("./classes/Manager");

const manager = new Manager();

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
