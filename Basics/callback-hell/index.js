// Callback function example
function greet(name, callback) {
  console.log('Hello, ' + name + '!');
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

// Passing sayGoodbye function as a callback
greet('Alice', sayGoodbye);

// Callback hell example
function step1(data, callback) {
  setTimeout(function() {
    console.log('Step 1 completed with data: ' + data);
    callback('Step 1 result');
  }, 1000);
}

function step2(data, callback) {
  setTimeout(function() {
    console.log('Step 2 completed with data: ' + data);
    callback('Step 2 result');
  }, 1000);
}

function step3(data, callback) {
  setTimeout(function() {
    console.log('Step 3 completed with data: ' + data);
    callback('Step 3 result');
  }, 1000);
}

step1('start', function(result1) {
  step2(result1, function(result2) {
    step3(result2, function(result3) {
      console.log('All steps completed with final result: ' + result3);
    });
  });
});