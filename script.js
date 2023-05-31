// Array of promises
const promises = [
  new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 4 resolved'), getRandomTime())),
  new Promise((resolve) => setTimeout(() => resolve('Promise 5 resolved'), getRandomTime()))
];

// Get a random time between 1 and 5 seconds
function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000;
}

// Wait for the first promise to resolve using Promise.any
Promise.any(promises)
  .then((result) => {
    // Print the result to the output div
    document.getElementById('output').innerText = result;
  });
