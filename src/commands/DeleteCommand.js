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

    // Check if the id is a number and is positive.
    if (typeof this.id === Number && this.id === 0) {
      console.log('The id must be a positive number');
      return;
    }

    // Find the task with the given id. 
    const taskIndex = tasks.findIndex(t => t.id === this.id);

    // If the task is not found, return a message of error.
    if (taskIndex === -1) {
      console.log(`No tasks were found with the id: ${this.id}`);
      return;
    }
    // If the task is found, remove it from the tasks array.
    tasks.splice(taskIndex, 1);

    // Save the new array to the tasks repository.
    this.tasksRepository.saveTasks(tasks);

    // Display message in console indicating the task with given id was deleted successfully.
    console.log(`The task with id ${this.id} was deleted successfully`)
  }
}