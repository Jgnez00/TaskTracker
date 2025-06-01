import { readTasks, saveTasks } from "./utilsFS.js";
import crypto from 'node:crypto';

// Obtenemos las tareas del archivo tasks.json y las almacenamos en una variable`
const tasks = readTasks();

export const listTasks = ( status = undefined ) => {
  if (!status) {
    console.log(tasks);
    return
  }
  const taskFoulds = tasks.filter(task => task.status === status);
  
  if (taskFoulds.length === 0) {
    console.log(`No tasks found with id ${ status}`);
    return;
  }
  
  console.log(taskFoulds);
}


export const addTask = (description) => {
  if (typeof description !== 'string') {
    console.log('La descripción de la tarea debe ser una cadena de texto');
    return;
  }

  const newTask = {
    id: crypto.randomUUID(),
    description,
    status: 'todo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  tasks.push(newTask);
  saveTasks(tasks);
  console.log(`Tarea añadida: ${newTask.id}`);
}