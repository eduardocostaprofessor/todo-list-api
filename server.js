const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const app = express(); //inicia o app

app.use(cors())
app.use(cors());
app.use(express.json())
require('dotenv/config');

// iniciando o DB
mongoose.connect(
    // 'mongodb://localhost:27017/todolistapi', 
    process.env.MONGO_URL,
    {useNewUrlParser: true} 
)
// models
requireDir('./src/models');
//Rotas
app.use('/api', require('./src/routes'))


app.listen( process.env.PORT || 3002 )


