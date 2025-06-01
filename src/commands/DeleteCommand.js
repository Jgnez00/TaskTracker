import { readTasks, saveTasks } from "../taskRepository.js";

export default class DeleteCommand {
  constructor (id) {
    this.id = id;
  }

  execute () {
    const tasks = readTasks();
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
    saveTasks(tasks);
    console.log(`La tareas con id ${this.id} se elimino correctamente`);
  }
}