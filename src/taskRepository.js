import fs from 'node:fs';

const PATH = './tasks.json';

export const readTasks = () => {
  try {
    const data = fs.readFileSync(PATH, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    if (e.code === 'ENOENT') {
      fs.writeFileSync(PATH, '[]', 'utf8');
      return [];
    }
    throw e;
  }
}

export const saveTasks = (tasks) => {
  fs.writeFileSync(PATH, JSON.stringify(tasks, null, 2));
}