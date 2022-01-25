const {data} = require('./Params example/toFilter-data');
const express = require('express');
const favicon = require('serve-favicon');
const app = express();

//HOME PAGE
app.get('/', (req, res) => {
    res.send("Home page");
});

//RESOURCE LIST
app.get("/api/data/", (req, res)=> {
    
    const newList = data.map((el) => {
        
        const {id, name, age, height} = el;
        
        return {id, name, age, height}
    });
    
    res.json(newList);
});


//FILTERED ITEM
app.get("/api/data/:id", (req, res) => {
     
    const  { id }  = req.params;
    
    const Item = data.find((dataElement) => {
        
        if(dataElement.id === Number(id)){
            return dataElement
        }
    
    });

    if(!Item){
        
        return res.status(404).send('Not found');
    }

    return res.json(Item);
});

//ERROR PAGE
app.get('*',(req, res) => {
    res.send("Page not found");
});

//LISTEN
app.listen(5000, () => {
    console.log("Port 5000 is listening");
});