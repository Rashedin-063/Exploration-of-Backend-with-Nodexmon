const express = require('express')
const app = express()
const PORT = 3000;

app.use(express.urlencoded({ extended: true }))

const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
  { id: 3, name: 'Alice Doe', email: 'alice.doe@example.com' }
]


const htmlForm = `
<form method='POST' action='/users'>
<input type='text' name='name' placeholder='Enter your name'/>
<input type='email' name='email' placeholder='Enter your email'/>
<button type='submit'>Save User</button>
</form>
`



app.get('/', (req, res) => { 
  res.send(htmlForm) 
})
app.post('/users', (req, res) => { 

  const {name, email} = req.body
  
  const newUser = { id : new Date(),  name, email }
  
  users.push(newUser)

  res.status(201).json({
    success: true,
    users
  })

})

app.use((req, res, nex) => {
  res.status(404).send({
    message: 'Not Found'
  })
 
})


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})