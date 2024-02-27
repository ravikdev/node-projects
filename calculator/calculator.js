const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/', (req,res ) => {
  var num1 = Number(req.body.n1)
  var num2 = Number(req.body.n2)
  var result = num1 + num2;

  res.send('Thanks for posting' + result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
















// const express = require('express');
// const bodyParser = require("body-parser");
// const app = express();

// const port = 3000
// app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname +"/index.html")
// })

// app.post('/', (req, res) => {
//   // This line sets up a route for handling POST requests to the root URL (/).
//   var num1= Number(req.body.n1);
//   var num2= Number(req.body.n2);
//   var result = num1 + num2;

//   res.send("The result of the calculation is" + result);
//   // res.send() method sends a string as the response body.
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })