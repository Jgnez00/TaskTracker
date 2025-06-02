export default class DeleteCommand {
  constructor (id, tasksRepository) {
    this.id = id;
    this.tasksRepository = tasksRepository;
  }

  execute () {
    const tasks = this.tasksRepository.readTasks();
    if (typeof this.id === Number && this.id === 0) {
      console.log('El id tiene que ser un numero positivo');
      return;
    }

    const taskIndex = tasks.findIndex(t => t.id === this.id);
    if (taskIndex === -1) {
      console.log(`No se encontraron tareas con el id: ${this.id}`);
      return;
    }

    tasks.splice(taskIndex, 1);
    this.tasksRepository.saveTasks(tasks);
    console.log(`La tareas con id ${this.id} se elimino correctamente`);
  }
}