const mongoose = require('mongoose')

//model que vai usar
const Note = mongoose.model('Note')


module.exports = {

    async readAll(req, res) {
        const { page = 1 } = req.query
        const userId = req.body.userId
        await Note.find({userId})
        notes = await Note.paginate({}, { page, limit: 50 })

        return res.json(notes)
    },

    async read(req, res) {
        const userId = req.body.userId
        const noteId = req.params.id

        const notes = await Note.find({ _id: noteId, userId })

        return res.json(notes)
    },

    async insert(req, res) {

        if (typeof req.body.userId === "undefined")
            return res.json({ error: "favor informar o usuário" })

        const notes = await Note.create(req.body)

        return res.json(notes)
    },

    async update(req, res) {
        const notes = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(notes)
    },

    async delete(req, res) {
        await Note.findByIdAndRemove(req.params.id)

        return res.json('Apagado com sucesso')
    }
}