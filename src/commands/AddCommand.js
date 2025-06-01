import { readTasks, saveTasks } from "../taskRepository.js";
import crypto from 'node:crypto';

export default class AddCommand {
  constructor(description) {
    this.description = description;
  }

  execute() {
    try {const tasks = readTasks();
      if (typeof this.description !== 'string') {
        console.log('La descripción de la tarea debe ser una cadena de texto');
        return;
      }

      const newTask = {
        id: crypto.randomUUID(),
        description: this.description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      tasks.push(newTask);
      saveTasks(tasks);
      console.log(`Tarea añadida: ${newTask.id}`);
    } catch (e) {
      console.log(e.message);
    }
  }
}