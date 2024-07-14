import express from 'express'
import fs from 'fs'

const router = express.Router()

const usersData = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));

router.get('/data', (req , res)=>{
    res.status(200).json(usersData)
})

router.get('/data/:id', (req , res)=>{
    let id = req.params.id
    console.log(id)
    console.log(usersData[0].id);
    res.status(200).json(usersData[0].name)
})

export default router