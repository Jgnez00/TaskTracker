import { addTask, listTasks } from "./utils.js";

const args = process.argv.slice(2); // Ignora los primeros dos argumentos (node y el script)
const method = args[0]; // El primer argumento es el método (add, remove, list)
const param = args[1]; // El segundo argumento es el parámetro (id o status)

switch (method) {
  case 'list': {
    if (!param) {
      listTasks();
      process.exit(0);
    }
    listTasks(param);
    break;
  }
  case 'add': {
    if (!param) {
      console.log('Falta el parámetro de tarea');
      process.exit(1);
    }

    addTask(param);
    break;
  }
  case 'search': {
    break; 
  }
  case 'delete': {
    break; 
  }
}

