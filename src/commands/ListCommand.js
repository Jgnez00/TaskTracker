import { validateStatus } from "../validator/taskValidator.js";

export default class ListCommand {
  // This command lists all tasks or filters them by status if provided.

  // Method constructor of the class.
  // @param {string} status - The status to filter tasks by (optional).
  // @param {object} tasksRepository - The repository to manage tasks.
  constructor (status, tasksRepository) {
    this.status = status;
    this.tasksRepository = tasksRepository;
  }  

  // Method to check if the command is a 'list' command.
  // @param {string} method - The method to check.
  isMe (method) {
    return method === 'lis';
  }

  // Method to execute the command.
  execute () {
    const tasks = this.tasksRepository.readTasks(); // Read the current tasks from the tasks repository.

    // If no status is provided, display all tasks.
    if (!this.status) {
      console.log(tasks); 
      return;
    }

    // Validate the provided status.
    if (validateStatus(this.status)) return;
    
    const tasksFiltered = tasks.filter(t => t.status === this.status); // filter tasks by that status.

    tasksFiltered.length === 0 
      ? console.log(`There are no tasks with the status: ${this.status}`) // If no tasks match the provided status, display a message error.
      : console.log(tasksFiltered); // If tasks match the provided status, display them.
  };
}
