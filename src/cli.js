import { AddCommand, DeleteCommand, UpdateCommand, ListCommand } from './commands/index.js';
import TaskOperations from './taskOperations.js';

const args = process.argv.slice(2); // Ignore the first two arguments (node and script path)
const [method, param, newDescription] = args; // Deconstructs the arguments
const taskRepository = new TaskOperations() // Create an object type TaskOperations
const methodsAvailable = ['list', 'add', 'update', 'delete', 'help']; // Array with available methods

// Array with all available commands (instantiated)
const availableCommands = [
  new ListCommand(param, taskRepository),
  new AddCommand(param, taskRepository),
  new UpdateCommand(param, newDescription, taskRepository),
  new DeleteCommand(param, taskRepository)
]

// Check if the method is one of the available methods
if (!methodsAvailable.includes(method)) {
  console.error(`Unknown command: ${method}`);
  console.log('Use "help" to see the list of available commands.');
  process.exit(1); // Exit the process with an error code
}

if (method === 'help') {
  console.log('Available commands:');
  console.log('lis [status] - List tasks with optional status filter');
  console.log('ads <description> - Add a new task with the given description');
  console.log('upd <id> <newDescription> - Update the description of a task by its ID');
  console.log('del <id> - Delete a task by its ID');
  process.exit(0); // Exit the process after displaying help
}

// Iterate through the available commands 
availableCommands.forEach(command => {
  // Check if the command matches the method isMe
  if (command.isMe(method)) {
    command.execute(); // Execute the command if it matches the method
  }
});

