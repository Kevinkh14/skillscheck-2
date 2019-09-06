const express = require ('express')
const massive = require ('massive')
require('dotenv').config()
const app = express()

app.use(express.json())
const port = 5050
const {CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
.then(dbInstance =>{
    app.set('db',dbInstance)
    console.log('database connected')
})
.catch(err =>console.log(err))

app.listen(port, ()=>console.log(`listening on port ${port}`))