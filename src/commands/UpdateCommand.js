import { validateDescription, validateId } from "../validator/taskValidator.js";

export default class UpdateCommand {
  // This command updates the description of an existing task by its ID.

  // Method constructor of the class.
  // @param {number} id - The id of the task to update.
  // @param {TasksRepository} tasksRepository - The repository to manage tasks.
  // @param {string} description - The new description for the task.
  constructor (id, description, tasksRepository ) {
    this.id = id;
    this.description = description;
    this.tasksRepository = tasksRepository;
  }

  // Method to check if the command is an 'update' command.
  // @param {string} method - The method to check.
  isMe (method) {
    return method === 'upd';
  }

  // Method to execute the command.
  execute () {
    const tasks = this.tasksRepository.readTasks(); // Read the current tasks from the tasks repository.
    validateId(this.id); // Validate the id of the task to be updated.    
    validateDescription(this.description); // Validate the new description of the task.

    const taskIndex = tasks.findIndex(t => t.id === this.id); // Find the task with the given id.

    // If the task is not found, return a message of error.
    if (taskIndex === -1) {
      console.log(`No task were found with the id: ${this.id}`);
      return;
    }
    
    tasks[taskIndex].description = this.description; // Update the task's description.
    this.tasksRepository.saveTasks(tasks); // Update the task's updatedAt timestamp.
    console.log(`Task with id ${this.id} was updated successfully`); // Display message in console.
  }
}