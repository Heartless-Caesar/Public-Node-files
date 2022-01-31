const express = require('express')
const { exampleData } = require('../DELETE method/example-data')
const getData = ((req, res) => {
    res.status(201).send('Home page')
})

const getJsonData = ((req, res) => {
    res.status(201).json(exampleData)
})

const postData = ((req, res) => {
    const { className } = req.body

    if(!className){
        return res.status(401).send('Please provide a request body')
    }
})

const putData = ((req, res) => {
    const { id } = req.params
    const { className } = req.body
    
    const item = exampleData.find((e) => e.id === Number(id))

    if(!item){
        return res.status(401).send('Please provide the request body')
    }

    const updatedItem = exampleData.map((e) => {
        if(e.id === Number(id)){
            e.className = className
        }

        return e
    })

    res.status(201).json(updatedItem)
})

const deleteData = ((req, res) => {
    const { id } = req.params

    const item = exampleData.find((e) => e.id === Number(id))

    if(!item){
        res.status(401).send(`There is no element with an id of ${id}`)
    }

    const updatedList = exampleData.map((e) => e.id !== Number(id))

    res.status(201).json(updatedList)
})

module.exports = { getData, getJsonData, postData, putData, deleteData }