import { AddCommand, DeleteCommand, UpdateCommand, ListCommand } from './commands/index.js';
import TaskOperations from './taskOperations.js';

const args = process.argv.slice(2); // Ignora los primeros dos argumentos (node y el script)
const [method, param, newDescription] = args; // Desestructura los argumentos
const taskRepository = new TaskOperations() // Crea un objeto que contenga las funciones de lectura y escritura de tareas

switch (method) {
  case 'list': {
    new ListCommand(param, taskRepository).execute();
    break;
  }
  
  case 'add': {
    new AddCommand(param, taskRepository).execute();
    break;
  }
  
  case 'update': {
    new UpdateCommand(param, taskRepository , newDescription).execute();
    break; 
  }

  case 'delete': {
    new DeleteCommand(param, taskRepository).execute();
    break; 
  }
}

