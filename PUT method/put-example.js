const express = require('express');
const app = express();

//DECONSTRUCT ARRAYS OF OBJECTS SO THAT THEY BECOME ITERABLE
let { exampleData } = require('./example-data')

const port = 5000;


app.use([express.urlencoded({extended : false}), express.json()])


app.get('/', (req, res) => {
    res.status(201).send('<h1>Home page</h1>')
});


app.get('/app/content', (req, res) => {
    res.status(201).json(exampleData)
});


app.post('/app/content', (req, res) => {
    const { id } = req.body;

    if(!id){
      return res.status(404).json({success : false, message : 'Please provide an id value'})
    }

    res.status(201).send({success : true, content : [...exampleData, id]})
});


app.put('/app/content/:id', (req, res) => {
    
    //PARAM ELEMENT TO BE FOUND
    const { id } = req.params
    
    //VALUE TO BE ALTERED
    const { model } = req.body
 
    const element = exampleData.find((e) => e.id === Number(id))
    
    if(!element){
        return res.status(401).send(`The id of ${id} does not exist`)
    }
    
    const newElement = exampleData.map((e) => {
        if(e.id === Number(id)){
            e.model = model
        }

        return e
    });
    
    res.status(201).json({success : true, content : newElement})
});


app.listen(port, () => {
   console.log(`Port ${port} is listening`);
});
