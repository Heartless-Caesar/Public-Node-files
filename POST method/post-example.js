const { json } = require('express');
const express = require('express');
const app = express();
const exampleData = require('./example-data')
const port = 5000;

app.use([express.urlencoded({extended : false}),json()]);

app.get('/', (req, res) => {
    res.status(201).send('Home page')
});

app.get('/app/postman/content', (req,res) => {
   res.status(201).json(exampleData)
})

app.post('/app/postman/content', (req, res) => {
  const { model } = req.body;

  if(!model){
    return  res.status(400).json({success : false, msg : 'Provide a value'})
  }

  res.status(201).json({success : true, content : model})
});

app.listen(port, () => {
    console.log(`Port ${port} is listening`);
})