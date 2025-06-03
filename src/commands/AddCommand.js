import crypto from 'node:crypto';

export default class AddCommand {
  // This command adds a new task with a description to the tasks repository.

  // Method constructor of the class
  // @param {string} description - The description of the task to be added.
  constructor(description, tasksRepository) {
    this.description = description;
    this.tasksRepository = tasksRepository;
  }

  // Method to check if the command is an 'add' command
  // @param {string} method - The method to check.
  isMe (method) {
    return method === 'add';
  }

  // Method to execute the command
  // It reads the current tasks, creates a new task with the provided description
  execute() {
    try {const tasks = readTasks();
      // Check if the description is provided and is a string
      if (typeof this.description !== 'string') {
        console.log('The task description must be a string');
        return;
      }

      // Create the new task for the tasks repository
      const newTask = {
        id: crypto.randomUUID(),
        description: this.description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      // Add the new task to the tasks array
      tasks.push(newTask);

      // Save the new task to the tasks repository
      this.tasksRepository.saveTasks(tasks);

      // Display message in console with the id of new task
      console.log(`Task added: ${newTask.id}`);
    } catch (e) {
      console.log(e.message);
    }
  }
}