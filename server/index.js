const express = require ('express')
const massive = require ('massive')
require('dotenv').config()
const controller = require ('./controller')
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

app.post("/api/shelfie",controller.create)
app.get('/api/shelfie',controller.get)
app.put("/api/shelfie/:id",controller.edit)
app.delete("/api/shelfie/:id",controller.destroy)

app.listen(port, ()=>console.log(`listening on port ${port}`))