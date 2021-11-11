const express = require('express')
const cors = require('cors')
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express()
const port = 3001;
app.use(express.json())

app.use(cors())
app.get('/',(req, res)=>{
  res.send('Hola mi server en express')
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, ()=>{
  console.log(`Mi port ${port}`)
})

/*
app.get('/products',(req, res)=>{
  const products = [];
  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl()
    })

  }
  res.json(products)
})
app.get('/products/:id',(req, res)=>{
    //supongamos que la url viene con => http://localhost:3000/products/prod1

  const {id} = req.params
  res.json({
    id,
    name : 'Producto 1',
    prince : 1000
  })
})
app.get('/users',(req, res)=>{
  //supongamos que la url viene con => http://localhost:3000/users?pagina=1&limit=1&offsets=0

  // eslint-disable-next-line no-unused-vars
  const { pagina, limit, offsets } = req.query
  res.json({
    pagina,
    name : 'Producto 1',
    prince : 1000
  })
})
*/

