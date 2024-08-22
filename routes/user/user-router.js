import express from 'express'
const router = express.Router()
import { UserService } from './user.service.js'

const userService = new UserService()

router.get('/user/:id', async (req, res) => {
    const user = await userService.findUser(req)
    res.json(user)

})

router.get('/users', async () => {
    const users = await userService.findAllUsers(req)
    res.json(users)
})

router.put('/user', async (req, res) => {

})

router.delete('/user', async (req, res) => {
    
})

export default router;