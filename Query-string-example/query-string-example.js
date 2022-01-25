const express = require('express');
const app = express();
const { data } = require('../Params example/toFilter-data')

//HOME PAGE
app.get('/', (req, res) => {
    res.send('Home page');
});

//DATA MAPPING
app.get('/api/data', (req, res) => {
    
    const List = data.map((x) => {
       const {id, name, age, height} = x;

       return {id, name, age, height}
    });

    res.json(List);
});

//QUERY STRING
app.get('/api/data/query', (req, res) => {
    
    //DESIGNATED QUERY PARAMETERS
    let { search, limit } = req.query;

    /* WILL OUTPUT THE PARAMETERS YOU DECIDED ON THE URL */
    //console.log(req.query);
    
    /* FILTERING THE DESIRED ELEMENTS FROM IMPORTED DATA MODULE*/
    let sortedList = [...data];
    
    /* MATCH THE DESIRED STARTING STRING OF THE DESIRED ELEMENT */
    if(search){
        sortedList = sortedList.filter((x) => {
            return x.name.startsWith(search);
        })
    }

    /* LIMIT THE AMOUNT OF SEARCH RESULTS FROM A QUERY */
    if(limit){
        sortedList = sortedList.slice(0,Number(limit));
    }

    res.status(200).json(sortedList);
})


//PORT LISTENER 
app.listen(5000, () => {
    console.log('Port 5000 is listening');
});