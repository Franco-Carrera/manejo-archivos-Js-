const fs = require("fs");
const makeId = require("../utils");

//events: arreglo de eventos

// el event tendra: title, location, price, capacity, status, participants.

// some para filtrar si es true el title del evento: arroja ya existe. // sino en else arroja el dateObjeto.

class Manager {
  async createEvent(event) {
    try {
      let data = await fs.promises.readFile("./files/events.txt", "utf-8");
      let events = JSON.parse(data);
      if (events.some((evt) => evt.title === event.title)) {
        return { status: "error", message: "El evento ya existe" };
      } else {
        let dataObj = {
          id: makeId(7),
          title: event.title,
          location: event.location,
          price: event.price,
          capacity: event.capacity,
          status: "open",
          participants: [],
        };
        events.push(dataObj);
        try {
          await fs.promises.writeFile(
            "./files/events.txt",
            JSON.stringify(events, null, 2)
          );
          return { status: "succes", message: "created event" };
        } catch (err) {
          return { status: "error", message: "event not created" };
        }
      }
    } catch {
      // El archivo no existe, entonces se crea en catch.
      let dataObj = {
        id: makeId(7),
        title: event.title,
        location: event.location,
        price: event.price,
        capacity: event.capacity,
        status: "open",
        participants: [],
      };
      try {
        await fs.promises.writeFile(
          "./files/events.txt",
          JSON.stringify([dataObj], null, 2)
        );
        return { status: "succes", message: "Evento creado con éxito" };
      } catch (error) {
        return { status: "error", message: "Evento con error: " + error };
      }
    }
  }
}

// en try majeamos  promesa asíncrona para hacer un arreglo pasado a cadena de texto, con un mensaje de éxito
//  // Y su catch para capturar en caso de existir un error

// data modules
module.exports = Manager;
