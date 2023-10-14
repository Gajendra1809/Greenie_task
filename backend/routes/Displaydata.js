const express = require('express')
const router = express.Router()

router.post('/personData',(req,res)=>{
    try {
        console.log(global.person)
        res.send([global.person ])
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")
    }

})


module.exports=router;