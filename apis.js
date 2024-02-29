
const axios = require('axios');
const fs = require('fs');

// Define the URL of the API endpoint
const apiUrl = 'https://dummyjson.com/todos';

// Make a GET request to the API endpoint
axios.get(apiUrl)
  .then(response => {
    // Handle the response data
    const todos = response.data.todos;

    // Separate users into different age groups
    const completedTask = [];
    const notCompletedTask = [];

    todos.forEach(user => {
      if (user.completed === true) {
        completedTask.push(user);
      } 
       else {
        notCompletedTask.push(user);
      }
    });

    // Save data into different files
    saveDataToFile('completed.json', completedTask);
    saveDataToFile('notCompleted.json', notCompletedTask);

    
  })
  .catch(error => {
    // Handle errors
    console.error('fetch-error yo yo:', error);
  });

// Function to save data into a file
function saveDataToFile(filename, data) {
  fs.writeFile(filename, JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(Error `saving ${filename}:`, err);
    } else {
      console.log(`${filename} saved successfully.`);
    }
  });
}

