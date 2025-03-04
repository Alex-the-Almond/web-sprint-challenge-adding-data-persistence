const express = require('express');
const model = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    model.getProject()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        next(err)
    })
})

router.post('/', (req, res, next) => {
    model.addProject(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router;