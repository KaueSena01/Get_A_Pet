const express = require('express')
const cors = require('cors')

const app = express()

const User = require('./models/User')
const Pet = require('./models/Pet')

// Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

// Public folder for images
app.use(express.static('public'))

// Routes
const UserRoutes = require('./routes/UserRoutes')
const PetRoutes = require('./routes/PetRoutes')

// Congig JSON response
app.use(express.json())
app.use('/users', UserRoutes)
app.use('/pets', PetRoutes)

app.listen(5000)