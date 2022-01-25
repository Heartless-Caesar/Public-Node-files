const { data } = require('../Params example/toFilter-data'); 
const express = require('express');
const app = express();

const logger = (req, res, next) => {
   const url = req.url;
   const method = req.method;
   
   console.log(url, method);
   
   next();
};

app.use(logger);


app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/api/data', (req, res) => {
   const dataList = data.map((x) => {
     const { id , name, age, height} = x;
      return { id, name, age, height}
   });
   
   res.json(dataList);
});

app.get('/api/data/:id', (req, res) => {
   const { id } = req.params;
   
   const item = data.find((x) => {
    if(x.id === Number(id)){
      return x
    }
    if(!item){
     res.status(404).send('Item not found');
    }
    return res.json(item);
  }); 
});

app.get('/api/data/query', (req, res) => {
  
  const { search, limit } = req.query;
  const filteredData = [...data];
  
  if(search){
    filteredData = filteredData.filter((item) => {
      item.name.startsWith(search);  
    });
  }
  
  if(limit){
    filteredData = filteredData.slice(0,Number(limit));
  }
  
  res.json(filteredData)  
});

