// Test demo:  to check the Libuv Thread Pool


// process.env.UV_THREADPOOL_SIZE = 2; // This we can change Threadpool size

const crypto = require('crypto'),
      start = Date.now();

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('Time taken by 1st :', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('Time taken by 2nd :', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('Time taken by 3rd :', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('Time taken by 4th :', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('Time taken by 5th :', Date.now() - start);
});


// ==> While running this code you will notice that first 4 function's
//      result will be print out in ~1 second while 5th function will 
//      take extra 1 second to print out the result.

// ==> Because my system's Libuv Threadpool contain default only 4 Threads for concurrency execution.