// Demo: Here we will notice that we are blocking event loop fro 5 seconds

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

app.listen(3000);

// So if we refresh 2 pages at a same time 2nd page will take for than 5 seconds to execute