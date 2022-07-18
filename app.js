const fs = require("fs");
let tareas = fs.readFileSync('./tareas.json', 'utf-8');

function listar() {
    console.log(tareas);
}
const accion = process.argv[2];

switch (accion) {
    case "listar":
      listar();
      break;
      case undefined:
        console.log("Atención - Tienes que pasar una acción");
        break;
        default:
        console.log("No entiendo qué quieres hacer");
}