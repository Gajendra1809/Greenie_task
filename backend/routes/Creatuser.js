const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const jwtSecret="MyNameIsGajendraChilhateMERNStack"

router.post("/alumini",
  body('email').isEmail(),
  body('password').isLength({ min: 5 })
  , async (req, res) => {

    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }

    // res.send({  });
    const salt=await bcrypt.genSalt(10);
    const secPassword=await bcrypt.hash(req.body.password,salt)


    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        phone: req.body.phone,
        company: req.body.company,
        yop: req.body.yop,
        linkedin: req.body.linkedin,
        instagram: req.body.instagram,
        github: req.body.github,
        college: req.body.college,
        designation: req.body.designation,
        img:req.body.img,
        resume:req.body.resume
        
      })
      res.json({ success: true })
    } catch (error) {
      console.log(error)
      res.json({ success: false })
    }
  })

router.post("/loginuser",
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),

  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }
    let email = req.body.email;


    try {
      let userData = await User.findOne({ email })
      if (!userData) {
        return res.status(400).send({ errors: "Incorrect credentials" });
      }
      const pwdCompare=await bcrypt.compare(req.body.password,userData.password);
      if (!pwdCompare) {
        return res.status(400).send({ errors: "Incorrect password" });
      }
      const data={
       user:{
        id:userData.id
       }
      }
      const authToken=jwt.sign(data,jwtSecret)
      res.json({ success: true,authToken:authToken })
    } catch (error) {
      console.log(error)
      res.json({ success: false })
    }
  })
module.exports = router;