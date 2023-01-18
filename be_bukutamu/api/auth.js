const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/User")
var bodyParser = require('body-parser')
// Express Router
const router = express.Router()


// login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } })
        if (!user) return res.status(404).send({
            status: 404,
            message: "User not found"
        });
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) return res.status(404).send({
            status: 404,
            message: "Invalid password"
        })
        const token = jwt.sign({ userId: user.id }, 'secret-key')
        res.status(200).send({
            status: 200,
            message: 'Success',
            token: token,
            password: isPasswordValid
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/data/user', async (req, res) => {
    try {
        const user = await User.findAll()
        res.status(200).send({
            status: 200,
            message: `Successfully get data`,
            data: user
        })
    } catch (error) {
        
    }
})

module.exports = router;