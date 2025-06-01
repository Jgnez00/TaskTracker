import { readTasks } from "../taskRepository.js";

export default class ListCommand {
  constructor ( status ) {
    this.status = status;
  }  

  execute () {
    const tasks = readTasks();
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
