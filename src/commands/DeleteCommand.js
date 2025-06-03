import { validateId } from "../validator/taskValidator.js";

export default class DeleteCommand {
  // Method constructor of the class.
  // @param {number} id - The id of the task to delete.
  // @param {TasksRepository} tasksRepository - The repository to manage tasks.
  constructor (id, tasksRepository) {
    this.id = id;
    this.tasksRepository = tasksRepository;
  }

  // Method to check if the command is a 'delete' command.
  // @param {string} method - The method to check.
  isMe (method) {
    return method === 'delete';
  }

  // Method to execute the command.
  execute () {
    // Read the current tasks from the tasks repository.
    const tasks = this.tasksRepository.readTasks();
    validateId(this.id); // Validate the id of the task to be deleted.

    const taskIndex = tasks.findIndex(t => t.id === this.id); // Find the task with the given id. 

    // If the task is not found, return a message of error.
    if (taskIndex === -1) {
      console.log(`No tasks were found with the id: ${this.id}`);
      return;
    }
    
    tasks.splice(taskIndex, 1); // If the task is found, remove it from the tasks array.
    this.tasksRepository.saveTasks(tasks); // Save the new array to the tasks repository.
    console.log(`The task with id ${this.id} was deleted successfully`) // Display message in console.
  }
}