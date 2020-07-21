// Test Demo: To check that some the low level function like networking 
//              is not handle by Libuv Thread pool or by node BUT
//              it's handle by OS itself.

const https = require('https'),
      start = Date.now(),
      doRequest = () => {

        https
        .request(
          'https://www.google.com',
          res => {
            res.on('data', () => {});
            res.on('end', () => {
              console.log(Date.now() - start);
            });
          }
        )
        .end();
      };

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();


// After run :
// As you can see all six calls appear to be completed at same exact time.

// What functions in node std library use the OS's async feature ?
// Almost everything around networkig for all OS's.
