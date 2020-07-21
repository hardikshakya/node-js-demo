// Test demo:  to check that Node is NOT actually "Single Threaded"

const crypto = require('crypto'),
      start = Date.now();

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('Time taken by 1st :', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('Time taken by 2nd :', Date.now() - start);
});

// Both function get execute at same time :)