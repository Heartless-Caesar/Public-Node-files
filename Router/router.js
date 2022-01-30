const express = require('express')
const router = express.Router()
const { exampleData } = require('./exampleData')

router.get('/', (req, res) => {
    res.status(201).send('Home page')
})

router.get('/content', (req, res) => {
    res.status(201).json(exampleData) 
})

router.post('/content', (req, res) => {
    const { className } = req.body

    if(!className){
        res.status(401).send('Please provide the request body input')
    }

    res.status(201).json([...exampleData,className])
})


router.put('/content/:id', (req, res) => {
    const { id } = req.params
    const { className } = req.body
    
    const updateItem = exampleData.find((e) => e.id === Number(id));
    
    if(!updateItem){
        return res.status(401).send(`There is no element with an id of ${id}`)
    }

    const updatedData = exampleData.map((element) => {
        if(element.id === Number(id)){
            element.className = className
        }

        return element
    });

    res.status(201).json(updatedData)
})

router.delete('/content/:id', (req, res) => {
    const { id } = req.params

    const item = exampleData.find((e) => e.id === Number(id));
    
    if(!item){
        res.status(401).send(`There is no element with the id of ${id}`)
    }
    
    const updatedList = exampleData.filter((e) => e.id !== Number(id))

    res.status(201).json(updatedList)
})

module.exports = router 