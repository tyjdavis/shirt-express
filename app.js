let express = require('express');
let app = express();

let shirts = require('./shirts.json');


app.use(express.static('public'));


app.get('/t-shirt-shop', function (request, response) {
  response.sendFile('./index.html',  {root: __dirname })
})


app.get('/shirts/:shirtId', function (request, response) {
  let shirtId = request.params.shirtId;
  let index = parseInt(shirtId);
  let shirt = shirts[index];
  if (shirt) {
    response.send(shirt);
  } else {
    response.send('Sorry! We have only three shirts.');
  }
});

app.listen(3000, function () {
  console.log('The express server is now listening at port 3000. To see it in action, open your browser and enter localhost:3000/shirts in the address bar.')
});
