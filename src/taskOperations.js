import fs from 'fs';

const PATH = './src/tasks.json';

export default class TaskOperations {
  readTasks = () => {
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
  
  saveTasks = (tasks) => {
    this.writeToFile(tasks);
  }

  writeToFile = (tasks) => {
    fs.writeFileSync(PATH, JSON.stringify(tasks, null, 2));
  }
}
