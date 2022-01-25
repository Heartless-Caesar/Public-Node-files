const { data } = require('../Params example/toFilter-data');
const logger = require('./logger');
const authorize = require('./auth');
const express = require('express');
const app = express();

const port = 5000;


app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/api/data', (req, res) => {
    const List = data.map((x) => {
        const {id, name, age, height} = x;
        
        return {id, name, age, height}
    });
    
    res.json(List);
});

app.use([logger, authorize]);

app.get('/api/data/:id', (req, res) => {
    
    const { id } = req.params;

    const newFound = data.find((x) => { 
        if(x.id === Number(id)){
            return x;
        }
    });

    return res.json(newFound);
});

app.get('/api/data/query', (req, res) => {
   const {search,limit} = req.query;
   const queriedList = [...data];

   if(search){
       queriedList = queriedList.filter((x) => {
          return x.name.startsWith(search);  
       });
   }

   if(limit){
       queriedList.slice(0,Number(limit));
   }
   
   res.status(200).json(queriedList);
});

app.listen(port, () => {
    console.log(`Port ${port} is listening...`)
})