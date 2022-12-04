const express = require('express')
const User = require('../models/file')

const router = express.Router()

router.post('/',async (req,res)=>{
    const {id,file} = req.body
try{
const user = await User.findOne({id:id})
if(user){
    User.updateOne({id:id},{files:file},(err,doc)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(doc)
        }
    })
}
else{
    
    const newUser = new User({
        id:id,
        files:file
    })
    await newUser.save()
}
}
catch(err){
    console.log(err)
}

})

router.get('/',async (req,res)=>{
    const {id} = req.body
    try{
        const user = await User({id:id})
        if(user){
            res.json(user)
        }
        else{
            res.json({message:"User not found"})
        }
    }
    catch(err){
        console.log(err)
    }
    
    })

