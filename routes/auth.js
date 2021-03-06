const express = require('express')
const router = express.Router();
const { validationResult, check } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth')

const User = require('../models/User')


// @route GET api/auth
// @desc Get logged in user
// @access Private

router.get('/', auth, async (req, res)=>{
    try {
       const user= await User.findById(req.user.id).select('-password')
       res.json(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
} )

// @route POST api/auth
// @desc Auth user and get token
// @access Public

router.post('/',[check('email', 'Please include a valid email').isEmail(),
                 check('password', 'password is required').exists()
], async (req, res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }
   const { email, password}=req.body

   try {
       let user = await User.findOne({ email})

       if (!user){
           res.status(400).json({msg:'Invalid Credentials'})
       }
      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch){
        res.status(400).json({msg:'Invalid Credentials'})
      }

      const payload ={
        id:user.id
    }
    jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn:3600
    }, (err,token)=>{
        if (err) {
            throw err
        }
        res.json({token})
    })

   } catch (error) {
    res.status(500)
    console.log(error.message)
   }
} )

module.exports = router