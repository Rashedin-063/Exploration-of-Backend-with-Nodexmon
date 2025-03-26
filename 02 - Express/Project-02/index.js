const express = require('express')
const app = express()
const PORT = 3000;
const userRouter = require('./routes/users.route')
const productRouter = require('./routes/products.route')

app.use(express.urlencoded({ extended: true, limit: '1mb' }))
app.use(userRouter)
app.use(productRouter)

app.use((req, res, nex) => {
  res.status(404).send({
    message: 'Not Found'
  })
 
})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})