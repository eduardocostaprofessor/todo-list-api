const express = require('express')
const routes = express.Router()

/*
 * controllers
 */
const UserController = require('./controllers/UserController')
const NoteController = require('./controllers/NoteController')
const IMCController = require('./controllers/IMCController')

/*
 * rotas
 */

//****************************** IMC ****************************** 

routes.get('/IMC', IMCController.readAll)
routes.post('/IMC', IMCController.insert)






//****************************** IMC ****************************** 
// users
/**
 * Carrega todos os usuários
 * @route GET /api/users
 * @group Usuários - Operações em usuários
 * @returns {object} 200 - 
 *      Retorna um Array de Objetos com todos os usuários e dados de paginação
 *      
 * @returns {Error}  Error - Unexpected error
 */
routes.get('/users', UserController.readAll)

/**
 * Carrega todos os usuários
 * @route GET /api/users/:id
 * @param {string} user.query
 * @group Usuários - Operações em usuários
 * @returns {object} 200 - 
 *      Retorna um Array de Objetos com todos os usuários e dados de paginação
 * 
 *      example code
 *      
 * @returns {Error}  Error - Unexpected error
 */
routes.get('/users/:id', UserController.read)

/**
 * Carrega todos os usuários
 * @route POST /api/usersLogin
 * @group Usuários - Operações em usuários
 * @param {string} user.body.required - Passar um  json no body user e password {"user" : "eduardo.costa", "password" : "111}
 * 
 * 
 * @returns {User.model} 200 - 
 *      Retorna um Array de Objetos com todos os usuários e dados de paginação
 * 
 *      example code
 *      
 * @returns {Error}  Error - Unexpected error
 */
routes.post('/usersLogin/', UserController.login)
routes.post('/users', UserController.insert)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)


//notes
routes.get('/notes', NoteController.readAll)
routes.get('/notes/:id', NoteController.read)
routes.post('/notes', NoteController.insert)
routes.put('/notes/:id', NoteController.update)
routes.delete('/notes/:id', NoteController.delete)


module.exports = routes