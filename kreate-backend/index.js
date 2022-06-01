const express = require('express')
require('./src/db/mongoose')
const app = express()
const cors = require('cors')
const Product = require('./src/model/product')


app.use(express.json())
app.use(cors())


app.get('/',(req,res) => {
  res.send('Hello world')
})


// create a product
app.post('/product/create',(req,res) => {

  const product = new Product(req.body)

  product.save().then((product) => {
    res.status(201).send(product)

  }).catch(e => {
    res.status(400).send(e)
  })
})


// get all product
app.get('/products',(req,res) => {
  Product.find()
  .then((product) => {
    res.status(200).send(product)
  }).catch((e) => {
    res.status(404).send(e)
  })
})



app.get('/productsfilter',(req,res) => {
  const pageOptions = {
    page: parseInt(req.query.page, 10) || 0,
    limit: parseInt(req.query.limit, 10) || 10
  }

  Product.find()
  .skip(pageOptions.page * pageOptions.limit)
  .limit(pageOptions.limit)
  .exec(function (err, doc) {
      if(err) { res.status(500).json(err); return; };
      res.status(200).json(doc);
  });
})






app.get("/product/:slug",(req,res) => {
  const slug = req.params.slug
  Product.findOne({slug:slug})
  .then((prod) => {
      res.status(200).send(prod)
  }).catch(e => res.status(404).send(e))
})


app.listen(3001,() => {
  console.log('app is running on port 3001')
})
