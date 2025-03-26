const express = require('express')
const app = express()
const PORT = 3000;
const userRouter = require('./routes/users.route')

app.use(express.urlencoded({ extended: true }))





app.use(userRouter)

app.use((req, res, nex) => {
  res.status(404).send({
    message: 'Not Found'
  })
 
})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})