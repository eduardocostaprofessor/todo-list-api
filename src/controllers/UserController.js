const mongoose = require('mongoose')

//model que vai usar
const User = mongoose.model('User')


module.exports = {
     
    async readAll(req, res) {
        const { page = 1 } = req.query
        const users = await User.paginate({}, { page, limit: 5 })
        return res.json(users)
    },

    async read(req, res) {
        const users = await User.findById(req.params.id)
        return res.json(users)
    },

    async insert(req, res) {
        const users = await User.create(req.body)
        return res.json(users)
    },

    async update(req, res) {
        const users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(users)
    },

    async delete(req, res) {
        await User.findByIdAndRemove(req.params.id)
        res.json('Apagado com sucesso')
    },
    
    async login(req, res) {
        const user = req.body.user
        const password = req.body.password
        const userPeople = await User.find({ user, password })
        return res.json(userPeople)
    },
}