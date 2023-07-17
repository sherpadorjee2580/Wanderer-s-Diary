const express = require('express')

require('dotenv').config()
const connection = require('./db/connection')
const Product = require('./models/products')
connection()
const app = express()
const port = 4000
//console.log(process.env)
app.use(express.json())





app.post('/products', (req, res) => {
  Products.create(req.body)
  res.json({
    msg: "products"
  })
})

app.get('/products', async(req, res) => {
 const data = await Products.find()
})

app.put('/products/:id', async(req, res) => {
  await Products.findByIdAndUpdate(req.params.id, req.body)
 })

 app.delete('/products/:id', async(req, res) => {
  await Products.findByIdAndDelete(req.params.id)
 })

 app.get('/products', async(req, res) => {
  const data = await Products.find()
 })
 app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${process.env.port}`)
  })