import Data from './examples';

const express = require('express');
const app = express();

app.get('/', () => {

    //YOU CAN PASS THE JSON DIRECTLY
    res.json([{user : 'john'}]);

    //YOU CAN PASS IMPORTED DATA
    res.json(Data);
})