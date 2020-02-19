const mongoose = require('mongoose')

//model que vai usar
const IMC = mongoose.model('Imc')


module.exports = {


    async readAll(req, res) {
        const { page = 1 } = req.query
        // const userId = req.body.userId
        // await IMC.find({userId})

        notes = await IMC.paginate({}, { page, limit: 50 })

        return res.json(notes)
    },

    readAllJSON(req, res) {
        const jsonData = [
            {
                nome: 'Eduardo Costa',
                altura: 1.67,
                peso: 85,
                IMC: 30.48
            },
            {
                nome: 'Thais Moraes',
                altura: 1.60,
                peso: 65,
                IMC: 25.39
            },
        ]

        return res.json(jsonData)
    },

    async insert(req, res) {

        // if (typeof req.body.userId === "undefined")
        //     return res.json({ error: "favor informar o usuário" })

        const IMCCreated = await IMC.create(req.body)

        return res.json(IMCCreated)
    },

}