export default class UpdateCommand {
  // This command updates the description of an existing task by its ID.

  // Method constructor of the class.
  // @param {number} id - The id of the task to update.
  // @param {TasksRepository} tasksRepository - The repository to manage tasks.
  // @param {string} description - The new description for the task.
  constructor (id, tasksRepository, description) {
    this.id = id;
    this.description = description;
    this.tasksRepository = tasksRepository;
  }

  // Method to check if the command is an 'update' command.
  // @param {string} method - The method to check.
  isMe (method) {
    return method === 'update';
  }

  // Method to execute the command.
  execute () {
    // Read the current tasks from the tasks repository.
    const tasks = this.tasksRepository.readTasks();

    // Validate the id is not undefined.
    if (!this.id) {
      console.log('Para poder hacer una actualizacion el id debe existir');
      return;
    }

    // Validate the id is a positive number.
    if (typeof this.id !== Number && this.id <= 0) {
      console.log('El id de la tarea debe ser un numero positivo')
      return;
    }

    // Find the task with the given id.
    const taskIndex = tasks.findIndex(t => t.id === this.id);

    // If the task is not found, return a message of error.
    if (taskIndex === -1) {
      console.log(`No task were found with the id: ${this.id}`);
      return;
    }

    // Check if the description is provided and is a string.
    if (typeof this.description !== 'string'){
      console.log('The description must be a string');
      return;
    }

    // Update the task's description.
    tasks[taskIndex].description = this.description;

    // Update the task's updatedAt timestamp.
    this.tasksRepository.saveTasks(tasks);

    // Display message in console indicating the task with given id was updated successfully.
    console.log(`Task with id ${this.id} was updated successfully`); 
  }
}