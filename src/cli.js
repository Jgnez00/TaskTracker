import { AddCommand, DeleteCommand, UpdateCommand, ListCommand } from './commands/index.js';
import TaskOperations from './taskOperations.js';

const args = process.argv.slice(2); // Ignore the first two arguments (node and script path)
const [method, param, newDescription] = args; // Deconstructs the arguments
const taskRepository = new TaskOperations() // Create an object type TaskOperations

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

