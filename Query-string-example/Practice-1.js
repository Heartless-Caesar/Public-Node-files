const { data } = require('./Params example/toFilter-data');
const express = require('express');
const app = express();

const port = 5000;

app.get('/api/data', (req, res) => {
   const newData = data.map((x) => {
    const {id, name} = x;
    
    return { id, name}
   });
   
   res.json(newData);
});

app.get('/api/data/query', (req, res) => {
    
    //REQUEST QUERY PARAMETERS	
    const { search, limit } = req.query;
    
    //LIST THAT WILL BE SORTED
    const toSortList = [...data];
    
    //MATCHING STRING ELEMENTS
    if(search){
    toSortList = toSortList.filter((x) => {
      return x.name.startsWith(search);
    });
   }
   
    //GETTING THE DESIRED NUMBER OF QUERY OUTPUTS
    if(limit){
     toSortList = toSortList.slice(0,Number(limit))
    }
    
  res.status(200).json(toSortList);  
})


app.listen(port,() => {
   console.log(`Port ${port} is listening...`);
});
