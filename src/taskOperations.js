import fs from 'fs';

// Define the path to the tasks.json file, this file will be used to store the tasks.
const PATH = './src/tasks.json';

export default class TaskOperations {
  // Class to handle task operations like reading and writing tasks to a file.

  // Method to read tasks from the file tasks.json.
  readTasks = () => {
    try {
      // Check if the file with the paht exists.
      if (!fs.existsSync(PATH)) {
        // Create the file if it doesn't exist.
        fs.writeFileSync(PATH, '[]', 'utf8'); 
      }

      // Read the file and save in a variable.
      const data = fs.readFileSync(PATH, 'utf8');

      // Return the parsed JSON data.
      return JSON.parse(data);
    } catch (e) {
      console.error('Error reading tasks:', e.message);
    }
  }
  
  // Method to save tasks to the file tasks.json.
  saveTasks = (tasks) => {
    // Check if tasks is an array.
    if (!Array.isArray(tasks)) {
      throw new Error('Tasks must be an array');
    }

    // Call the writeToFile method to write tasks to the file.
    this.writeToFile(tasks);
  }

  // Method to write tasks to the file tasks.json.
  writeToFile = (tasks) => {
    // Use fs.writeFileSync to write the tasks to the file.
    fs.writeFileSync(PATH, JSON.stringify(tasks, null, 2));
  }
}
