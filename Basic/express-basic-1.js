const express = require('express');
const app = express();

//app.get('/', (req, res) => {
//   res.status(200).send('Succesfull status');
//});

//Sending static files aka no server side rendering
//app.use(express.static('./public-static'));

app.get('/about',(req,res) => {
   res.status(200).send('About page');
});
  
//Error page 404
app.get('*' , (req,res) => {
    res.status(404).send('Resource not found');
});

app.listen(5000, () => {
   console.log('Port is listening');
});