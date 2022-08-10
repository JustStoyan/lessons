
const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//Registration
router.post('/register', (req, res, next) => {
    let { name, email, password } = req.body;
    User.findOne({ email })
        .then(user => {
            if (user) {
                res.json({
                    "user": user.name,
                    "message": "Already exists"
                })
            } else {
                //Hash the password and create an user
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(password, salt, function (err, hash) {
                        password = hash;
                        let newUser = new User({ name, email, password });
                        newUser.save().then(result => {
                            return res.json({ "name": result.name, "email": result.email, "message": "You have sucesfully created an user" })
                        })
                    });
                });
            }
        })
        .catch(next);

})

//Login
router.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password)
    User.findOne({ email })
        .then(user => {

            if (!user) {
                return res.status(400).json({ "message": "User or password are wrong" })
            } else {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        return res.status(400).json(err);
                    } else {
                        if (result) {
                            const token = jwt.sign({ email: user.email, id: user._id }, 'SECRET_KEY', { expiresIn: '24h' })

                            return res.status(200).json({
                                token: `Bearer ${token}`
                            })
                        } else {
                            return next();
                        }
                    }
                })
            }
        })
        .catch(next)
})
module.exports = router;
