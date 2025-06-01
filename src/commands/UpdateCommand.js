import { readTasks, saveTasks } from "../taskRepository.js";

export default class UpdateCommand {
  constructor (id, description) {
    this.id = id;
    this.description = description;
  }

  execute () {
    const tasks = readTasks();

    if (!this.id) {
      console.log('Para poder hacer una actualizacion el id debe existir');
      return;
    }

    if (typeof this.id !== Number && this.id <= 0) {
      console.log('El id de la tarea debe ser un numero positivo')
      return;
    }

    const taskIndex = tasks.findIndex(t => t.id === this.id);
    if (taskIndex === -1) {
      console.log(`No hay tareas con el id: ${this.id}`);
      return;
    }

    if (typeof this.description !== 'string'){
      console.log('La descriccion debe ser una cadena de texto');
      return;
    }

    tasks[taskIndex].description = this.description;
    saveTasks(tasks);
    console.log(`Tarea actualizada correctamente`); 
  }
}