let router = require('express').Router();
const Events = require('../db').import('../models/events')

router.post('/createEvent', (req, res) => {
    console.log('are we here');
    if(!req.errors) {
        const eventFormRequest = {
            eventName: req.body.eventName,
            description: req.body.description,
            eventLocation: req.body.eventLocation    
        }
        Events.create(eventFormRequest)
        .then(event => res.status(200).json(event))
        .catch(err => console.log(err));
    } else {
        console.log('////////////')
        res.status(500).json(req.errors)
    }
});

router.get('/', (req, res) => ( 
    Events.findAll({
        attributes: ['eventName','description','eventLocation']
    })
    .then(event => res.status(200).json(event))
    .catch(err => res.status(500).json({ error: err}))
))

module.exports = router;