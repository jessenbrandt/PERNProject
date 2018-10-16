let router = require('express').Router();
const Events = require('../db').import('../models/events')

router.post('/createEvent', (req, res) => {
    if(!req.errors) {
        const eventFormRequest = {
            eventName: req.body.eventName,
            description: req.body.description,
            eventLocation: req.body.eventLocation    
        }
        Events.create(eventFormRequest)
        .then(event => res.status(200).json(event))
        .catch(err => res.json(req.errors))
    } else {
        res.status(500).json(req.errors)
    }
});

module.exports = router;