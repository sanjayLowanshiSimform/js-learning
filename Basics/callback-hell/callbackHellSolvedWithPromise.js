// Promisified version of step1 function
function step1(data) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Step 1 completed with data: ' + data);
      resolve('Step 1 result');
    }, 1000);
  });
}

// Promisified version of step2 function
function step2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Step 2 completed with data: ' + data);
      resolve('Step 2 result');
    }, 1000);
  });
}

// Promisified version of step3 function
function step3(data) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Step 3 completed with data: ' + data);
      resolve('Step 3 result');
    }, 1000);
  });
}

// Chaining promises using then() method
step1('start')
  .then(result1 => {
    return step2(result1);
  })
  .then(result2 => {
    return step3(result2);
  })
  .then(result3 => {
    console.log('All steps completed with final result: ' + result3);
  })
  .catch(error => {
    console.error('Error:', error);
  });
