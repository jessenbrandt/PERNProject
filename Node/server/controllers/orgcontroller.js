let router = require('express').Router();
const Org = require('../db').import('../models/org')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const validateSession = require('../middleware/validate-session')

router.get('/', (req, res) => (
    Org.find()
    .then(org => res.status(200).json(org))
    .catch(err => res.status(500).json({ error: err}))
))

router.post('/createOrg', (req, res) => {
    Org.create({
        nameOfOrg: req.body.nameOfOrg,
        purpose: req.body.purpose,
        location: req.body.location,
        needs: req.body.location,
        password: bcrypt.hashSync(req.body.password, 10)
    })
        .then(
            createSuccess = (org) => {
                let token = jwt.sign({ id: org.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

                res.json({
                    org: org,
                    message: 'organization created',
                    sessionToken: token
                })
            },
            createError = err => res.send(500, err.message)
        )
})

router.post('/orgsignin', (req, res) => {
    Org.findOne({ where: { nameOfOrg: req.body.org.nameOfOrg } })
        .then(
            org => {
                if (org) {
                    bcrypt.compare(req.body.org.password, org.password, (err, matches) => {
                        if (matches) {
                            let token = jwt.sign({ id: org.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })

                            res.json({
                                org: org,
                                message: 'successfully authenticated',
                                sessionToken: token
                            })
                        } else {
                            res.status(502).send({error: 'bad gateway'})
                        }
                    })
                } else {
                    res.status(500).send({error: "failed to authenticate"})
                }
            },
            err => res.status(501).send({error: 'failed to process'})
        )
})


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