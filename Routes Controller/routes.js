const express = require('express')
const router = express.Router()
const { 
    getData,
    getJsonData, 
    postData, 
    putData, 
    deleteData     
} = require('./controllers')

router.get('', getData)

router.get('/content', getJsonData)

router.post('/content', postData)

router.put('/content/:id', putData)

router.delete('/content/:id', deleteData)

module.exports =  router 