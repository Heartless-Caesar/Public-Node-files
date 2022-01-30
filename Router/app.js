const express = require('express')
const app = express()
const  router  = require('./router')
const port = 5000

app.use([express.urlencoded({extended : false}), express.json()])

app.use('/app', router)

app.listen(port, () => {
    console.log(`Port ${port} is listening`);
})

