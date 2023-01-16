const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
const Tamu = require('../models/Tamu');
// Express Router
const router = express.Router()

router.post('/data/save', async (req, res, next) => {
    try {
        const {
            name, date_in, time_in, instance, purpose, appointment_with
        } = req.body;
    
        const tamu = await Tamu.create({
            name: name,
            date_in: date_in,
            time_in: time_in,
            instance: instance,
            purpose: purpose,
            appointment_with: appointment_with,
            time_out: ''
        })

        res.status(200).send({
            status: 200,
            message: `Successfully Input Tamu ${name}`,
            result: tamu
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/data/all', async (req, res, next) => {
    try {
        const tamus = await Tamu.findAll()
        res.status(200).send({
            status: 200,
            message: `Successfully get data`,
            data: tamus
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/data/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const tamuid = await Tamu.findByPk(id);
        if (!tamuid) {
            res.status(404).send("Not Found")
        } else {
            res.status(200).send({
                status: 200,
                message: `Successfully get data ${id}`,
                data: tamuid
            })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.put('/data/update/:id', async (req, res) => {
    try {
        const iddata = req.params.id;
        const time_out = req.body.time_out
        console.log(time_out)
        Tamu.findByPk(iddata)
        .then((tamu) => {
            tamu.update({ time_out: time_out}, { where: { id: iddata }})
        })
        res.status(200).send({
            status: 200,
            message: `Successfully update data ${iddata}`,
            data: time_out
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.delete('/data/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Tamu.destroy({ where: { id }});
        res.status(200).send({
            status: 200,
            message: `Successfully delete data`,
            result: deleted
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router;