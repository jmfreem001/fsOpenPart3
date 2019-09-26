const express = require('express')
const app = express() 
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))
app.use(cors())

morgan.token('content', function(req, res) {
  if (req.body){
    return JSON.stringify(req.body)
  }
  
})

let persons = [
  {
    name:"Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name:"Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },  
  {
    name:"Dan Abramov",
    number: "12-43-234345",
    id: 3
  },  
  {
    name:"Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
]

// Return all people in phonebook
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req,res) => {
  const id = Number(req.params.id )
  const person = persons.find(person => person.id === id)
  if (person){
    res.json(person)
  } else {
    res.status(404).end()
  }
  
})

// Display info in html format.
app.get('/info', (req, res) => {
  const date = new Date()
  const length = persons.length

  res.send(`<p>Phonebook has info for ${length} people</p><p>${date}</p>`)
})


app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})

const generateId = () => {
  return Math.floor(Math.random() * Math.floor(999999))
}

const nameExists = name => 
  persons.some(person => person.name === name)

app.post('/api/persons/', (req, res) => {
  const body = req.body

  if (!body.name){
    return res.status(400).json({
      error: 'missing name'
    })
  } else if (!body.number){
    return res.status(400).json({
      error: 'missing number'
    })
  } else if (nameExists(body.name)){
    return res.status(400).json({
      error: 'name already exists in phonebook'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(person)

  res.json(person)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`)
})