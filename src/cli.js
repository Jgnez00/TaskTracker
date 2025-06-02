import { AddCommand, DeleteCommand, UpdateCommand, ListCommand } from './commands/index.js';

const args = process.argv.slice(2); // Ignora los primeros dos argumentos (node y el script)
const [method, param, newDescription] = args; // Desestructura los argumentos

switch (method) {
  case 'list': {
    new ListCommand(param).execute();
    break;
  }
  
  case 'add': {
    new AddCommand(param).execute();
    break;
  }
  
  case 'update': {
    new UpdateCommand(param, newDescription).execute();
    break; 
  }
  case 'delete': {
    new DeleteCommand(param).execute();
    break; 
  }
}

