const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express(); //inicia o app
app.use(express.json())
app.use(cors())

const expressSwagger = require('express-swagger-generator')(app)

let porta = process.env.PORT || 3002

let options = {
    swaggerDefinition: {
        info: {
            description: 'Esta API foi criada apenas para testes com alunos do curso iniciação em HTML, CSS E JavaScript',
            title: 'JS Notes',
            version: '1.0.0',
        },
        host: 'localhost:3002',
        basePath: '/',
        produces: [
            "application/json"//,
            // "application/xml"
        ],
        schemes: [ 'http','https'],//
        securityDefinitions: {
            // JWT: {
            //     type: 'apiKey',
            //     in: 'header',
            //     name: 'Authorization',
            //     description: "",
            // }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./src/**/*.js'] //Path to the API handle folder
}
expressSwagger(options)




// iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/todolistapi', 
    {useNewUrlParser: true} 
)
// models
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'))

app.listen(porta)


