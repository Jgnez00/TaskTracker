import crypto from 'node:crypto';
import { validateDescription } from '../validator/taskValidator.js';

export default class AddCommand {
  // This command adds a new task with a description to the tasks repository.

  // Method constructor of the class.
  // @param {string} description - The description of the task to be added.
  // @param {object} tasksRepository - The repository to manage tasks.
  constructor (description, tasksRepository) {
    this.description = description;
    this.tasksRepository = tasksRepository;
  }

  // Method to check if the command is an 'add' command.
  // @param {string} method - The method to check.
  isMe (method) {
    return method === 'ads';
  }

  // Method to execute the command.
  execute () {
    try {
      const tasks = this.tasksRepository.readTasks(); // Read the current tasks from the tasks repository.
      validateDescription(this.description); // Validate the description of the new task.

      // Create the new task for the tasks repository.
      const newTask = {
        id: crypto.randomUUID(),
        description: this.description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      tasks.push(newTask); // Add the new task to the tasks array.
      this.tasksRepository.saveTasks(tasks); // Save the new task to the tasks repository.
      console.log(`Task added successfully`); // Display message in console.
    } catch (e) {
      console.log(e.message); // Display error message in console if an error occurs.
    }
  }
}