const express = require('express')

require('dotenv').config()
const connection = require('./db/connection')
const Users = require('./models/Users')
connection()
const app = express()
const port = 4000
//console.log(process.env)
app.use(express.json())





app.post('/Register', async(req, res) => {
  await Users.create(req.body)
  res.json({
    msg: "Mongodb is Successfully connected"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})