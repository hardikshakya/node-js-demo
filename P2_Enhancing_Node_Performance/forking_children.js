// Demo: To come out of event loop block we will use Node in 'Cluster' mode

const cluster = require('cluster');

// Is the file being executed in master mode?
if (cluster.isMaster) {
  // Cause forking_children.js to be executed *again* but in child mode
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  // I am a child, I am going to act like a server and do nothing else
  const express = require('express'),
        app = express(),
        doWork = (duration) => {
          const start = Date.now();
          while (Date.now() - start < duration) {}
        };

  app.get('/', (req, res) => {
    doWork(5000);
    res.send('In Main Page !')
  });

  app.get('/fast', (req, res) => {
    res.send('This is fast !')
  });

  app.listen(3000);  
}

// Now with 4 fork(). Try to call home (/) route and fast (/fast) route at a same time.
// You will see that '/fast' route will load data very fast compare to '/' route.

// Now with 1 fork(). Try to call home (/) route and fast (/fast) route at a same time.
// You will see that '/fast' route will load fast compare to '/' route BUT the not that fast that we saw with 4 fork().
