const express = require('express')
const app = express()
const cors = require('cors');

const PORT = 3000;
const userRouter = require('./routes/users.route')
const productRouter = require('./routes/products.route')

app.use(express.urlencoded({ extended: true, limit: '1mb' }))

const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions))

app.use( userRouter)
app.use(productRouter)

app.get('/', (req, res) => {
  res.send('<h1>Welcome to my server!!!</h1>')
})

app.use((req, res, nex) => {
  res.status(404).send({
    message: 'Not Found'
  })
 
})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})