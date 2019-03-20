var Form = require('./models');
const path = require('path');


module.exports = {

    getAllTask: (req, res) => {
        Form.find().then(data => res.json(data)).catch(err => res.json(err))
    },

    getOneTask: (req, res) => {
        const ID = req.params.id;
        Form.find({ _id: ID }).then(data => {
            console.log('successfully get one!');
            res.json(data)
        }).catch(err =>
            res.json(err)
        )
    },

    createTask: (req, res) => {
        const DATA = req.body;
        Form.create(DATA).then(data => res.json(data)).catch(err => res.json(err))
    },
    ///
    insertManyTask: (req, res) => {
        const DATA = req.body;
        Form.insertMany(DATA).then(data => res.json(data)).catch(err => res.json(err))

    },
    ///
    updateTask: (req, res) => {
        const DATA = req.body;
        const ID = req.params.id;
        Form.findOneAndUpdate({ _id: ID }, DATA, { runValidators: true, new: true }).then(data => res.json(data)).catch(err => res.json(err))
    },

    deleteTask: (req, res) => {
        const ID = req.params.id;
        Form.findOneAndDelete({ _id: ID }).then(data => res.json(data)).catch(err => releaseEvents.json(err))
    },

    deleteAllTask: (req, res) => {
        Form.deleteMany({}).then(data => res.json(data)).catch(err => releaseEvents.json(err))
    },

    goToAngularRoute: (req, res) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    }

}