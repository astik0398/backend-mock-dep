const express = require('express')

const {userModel} = require('../model/model.route')

const userRouter = express.Router()

userRouter.post('/register', async(req, res)=> {
   try {
    const newUser = new userModel({
        name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    label: req.body.label,
    userId: Math.floor((Math.random()) + Date.now())
    })

    await newUser.save()
    res.send( newUser)
   } catch (error) {
    res.send(error)
   }
})

userRouter.delete('/delete/:id', async(req, res)=> {
    const {id} = req.params
    try {
        await userModel.findByIdAndDelete({_id: id})
        res.send({"message": `item with id ${id} has been deleted`})
    } catch (error) {
        res.send({"message": error})
    }
})

module.exports = {
    userRouter
}