const express = require('express')
const connectDB = require('./config/db')
const path = require('path')


const app = express();

//Connect databes

connectDB()

// Init middelware

app.use(express.json({ extended: false }))


//app.get('/',(req, res)=> res.send('yeah') )

// Define Routes

app.use('/api/users', require('./routes/users'))

app.use('/api/auth', require('./routes/auth'))

app.use('/api/contacts', require('./routes/contacts'))

//Server static assets in production



app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build',
    'index.html')))






const PORT = 4000 || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))