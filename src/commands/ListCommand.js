export default class ListCommand {
  constructor ( status, tasksRepository ) {
    this.status = status;
    this.tasksRepository = tasksRepository;
  }  

  execute () {
    const tasks = this.tasksRepository.readTasks();
    if (!this.status) {
      console.log(tasks);
      return;
    }

    const tasksFiltered = tasks.filter(t => t.status === this.status);
    if (tasksFiltered.length === 0) {
      console.log(`No hay tareas con el estado ${this.status}`);
      return;
    }

    console.log(tasksFiltered);
  }
}
