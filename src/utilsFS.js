import fs from 'node:fs';

const path = './tasks.json';

export const readTasks = () => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

export const saveTasks = (tasks) => {
  fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
}