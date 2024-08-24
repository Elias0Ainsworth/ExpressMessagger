import express from 'express'
const router = express.Router()
import { UserService } from './user.service.js'

const userService = new UserService()

router.get('/user/:id', async (req, res) => {
    const user = await userService.findUser(req)
    res.json(user)

})

router.get('/user', async (req, res) => {
    const users = await userService.findAllUsers(req)
    res.json(users)
})

router.post('/user', async (req, res) => {
    const user = await userService.createUser(req)
    if(user) {
        res.json(user)
        return;
    }
    res.status(401).json({
        message: "This email is already exist",
    })
})

router.put('/user/:id', async (req, res) => {
    const user = await userService.updateUser(req)
    if(user) {
        res.json(user)
        return;
    }
    res.status(401).json({
        message: "There is no such user",
    }) 
})

router.delete('/user/:id', async (req, res) => {
    const user = await userService.deleteUser(req)
    if(user) {
        res.json(user)
        return;
    }
    res.status(401).json({
        message: "There is no such user",
    })
})

export default router;