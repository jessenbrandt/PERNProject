let router = require('express').Router();
const Org = require('../db').import('../models/org')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const validateSession = require('../middleware/validate-session')

router.get('/', (req, res) => ( 
    Org.findAll({
        attributes: ['nameOfOrg','location','needs','purpose']
    })
    .then(org => res.status(200).json(org))
    .catch(err => res.status(500).json({ error: err}))
))

router.post('/createOrg', validateSession, (req, res) => {
    Org.create({
        nameOfOrg: req.body.nameOfOrg,
        purpose: req.body.purpose,
        location: req.body.location,
        needs: req.body.needs,
    }).catch(err => {console.log(err)})
        .then(
            createSuccess = (org) => {
                console.log('sdokjsdkf')
                let token = jwt.sign({ id: org.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

                res.json({
                    org: org,
                    message: 'organization created',
                    sessionToken: token
                })
            },
            createError = err => res.send(500, err.message)
        ).catch(err => {console.log(err)})
})

router.get('/:nameofOrg', (req, res) => {
    Org.findOne({where: {nameOfOrg: req.params.nameOfOrg}})
    .then(org => res.status(200).json(org))
    .catch(err => res.status(500).json({ error: err}))
})

router.put('/:nameOfOrg', validateSession, (req, res) => {
    if (!req.errors) {
        Org.update(req.body,{ where: {nameOfOrg: req.params.nameOfOrg}})
        .then(org => res.status(200).json(org))
        .catch(err => res.json(req.errors))
    } else {
        res.status(500).json(req.errors)
    }
});

router.delete('/:nameOfOrg', validateSession, (req, res) => {
    Org.destroy({where: {nameOfOrg: req.params.nameOfOrg}})
    .then(org => res.status(200).json(org))
    .catch(err => res.status(500).json({error: err}))
});

module.exports = router;