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
    return method === 'list';
  }

  // Method to execute the command.
  execute () {
    // Read the current tasks from the tasks repository.
    const tasks = this.tasksRepository.readTasks();

    // If no status is provided, list all tasks.
    if (!this.status) {
      console.log(tasks);
      return;
    }

    // If a status is provided, filter tasks by that status.
    const tasksFiltered = tasks.filter(t => t.status === this.status);

    // If no tasks match the provided status, display a message.
    if (tasksFiltered.length === 0) {
      console.log(`There are no tasks with the status: ${this.status}`);
      return;
    }

    // If tasks match the provided status, display them.
    console.log(tasksFiltered);
  }
}
