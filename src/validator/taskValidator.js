export const validateStatus = (status) => {
  // Validates the status of a task

  // Allowed task status
  const allowedStates = ['todo', 'in-progress', 'done'];

  // Check if status is provided
  if (!status) {
    throw new Error('Status is required');
  }

  // Check if status is one of the allowed states
  if (!allowedStates.includes(status)) {
    throw new Error(`Invalid status. Valid values: ${allowedStates.join(', ')}`);
  }
}

export const validateDescription = (description) => {
  // Validates the description of a task

  // Check if description is provided
  if (!description) {
    throw new Error('Description is required');
  }

  // Check if description is a string
  if (typeof description !== 'string') {
    throw new Error('Description must be a string');
  }

  // Check if description length is valid
  if (description.length < 3 || description.length > 60) {
    throw new Error('Description must be between 3 and 60 characters');
  }
}

export const validateId = (id) => {
  // Validates the id of a task

  // Check if id is provided
  if (!id) {
    throw new Error('ID is required');
  }

  // Check if id is valid 
  if (typeof id !== 'string') {
    throw new Error('ID must be a string');
  }
}