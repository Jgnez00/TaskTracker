import { addTask, deleteTask, listTasks, updateTask } from "./utils.js";

const args = process.argv.slice(2); // Ignora los primeros dos argumentos (node y el script)
const [method, param, newDescription] = args; // Desestructura los argumentos

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
  
  case 'update': {
    if (!param && ! newDescription) {
      console.log('Faltan los parámetros de tarea y descripción');
      process.exit(1);
    }

    updateTask(param, newDescription);
    break; 
  }
  case 'delete': {
    if (!param) {
      console.log('Falta el id de la tarea a eliminar');
      process.exit(1);
    }

    deleteTask(param);    
    break; 
  }
}

