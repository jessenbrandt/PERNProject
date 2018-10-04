let router = require('express').Router();
const Org = require('../db').import('../models/org')

const validateSession = require('../middleware/validate-session')

router.get('/', (req, res) => (
    Org.find()
    .then(org => res.status(200).json(org))
    .catch(err => res.status(500).json({ error: err}))
))

router.post('/add', validateSession, (req, res) => {
    if (!req.errors) {
        const orgFromRequest = {
            nameOfOrg: req.body.nameOfOrg,
            purpose: req.body.purpose,
            location: req.body.location,
            needs: req.body.needs,
        }
        Org.create(orgFromRequest)
        .then(org => res.status(200).json(org))
        .catch(err => res.json(req.errors))
    } else {
        res.status(500).json(req.errors)
    }
})

router.get('/:nameofOrg', (req, res) => {
    Org.findOne({where: {nameOfOrg: req.params.nameOfOrg}})
    .then(org => res.status(200).json(org))
    .catch(err => res.status(500).json({ error: err}))
})

router.put('/:id', validateSession, (req, res) => {
    if (!req.errors) {
        Org.update(req.body,{ where: {id: req.params.id}})
        .then(org => res.status(200).json(org))
        .catch(err => res.json(req.errors))
    } else {
        res.status(500).json(req.errors)
    }
});

router.delete('/:id', validateSession, (req, res) => {
    Org.destroy({where: {id: req.params.id}})
    .then(org => res.status(200).json(org))
    .catch(err => res.status(500).json({error: err}))
});

module.exports = router;