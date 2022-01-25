const express = require('express');
const app = express();
const {data} = require('./toFilter-data');

app.get('/api/filtered', (req,res) => {
    const newData = data.map((nodule) => {
        const {id, name} = nodule
        
        return {id, name}
    })
    res.json(newData);
})