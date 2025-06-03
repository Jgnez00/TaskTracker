import fs from 'fs';
import {jest} from '@jest/globals';

import TaskOperations from '../src/taskOperations.js';

describe('Probando taskRepository.js', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })

  describe('Probando saveTasks', () => {
    test('Debe guardar las tareas en el archivo ./task.json', () => {
      const test = new TaskOperations();
      test.writeToFile = jest.fn();
      
      const tasks = [
        { id: '1', description: 'Test task 1', status: 'todo' },
        { id: '2', description: 'Test task 2', status: 'done' }
      ];

      test.saveTasks(tasks);

      expect(test.writeToFile).toHaveBeenCalledWith(
        tasks
      );
    });

    test('Debe manejar el error si no se puede escribir en el archivo', () => {
      fs.writeFileSync.mockImplementation(() => {
        throw new Error('Error escribiendo en el archivo');
      });

      expect(() => saveTasks([])).toThrow('Error escribiendo en el archivo');
    });
  });

  // describe(('Probando readTasks'), () => {
  //   afterEach(() => {
  //     jest.clearAllMocks();
  //   })
    
  //   test('Debe guardar las tareas en el archivo ./task.json', () => {
  //     const tests = readTasks();
  //     expect(Array.isArray(tests)).toBe(true);
  //     expect(tests).toEqual(expect.arrayContaining([]));
  //   })

  //   test('saveTasks should save tasks to the file', () => {
  //     const tasks = [
  //       { id: '1', description: 'Test task 1', status: 'todo' },
  //       { id: '2', description: 'Test task 2', status: 'done' }
  //     ];

  //     const saveResult = save(tasks);
  //   })
  // })
});
