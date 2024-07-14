import express from 'express'
import bodyParser from 'body-parser';
import fs from 'fs'

import dataRoute from './routes/data.js'


const app = express()

app.use(bodyParser.json());

const PORT = 3000

app.get('/',(req , res)=>{
    res.send("We are on HOME route")
})

app.use('/api', dataRoute)

app.get('/product',(req , res)=>{
    res.send("We are on product route")
})

app.post('/signup', (req , res)=>{
    let {name, email, password, phone} = req.body
    res.status(200).json(req.body)
})


app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING AT:`, PORT)
})