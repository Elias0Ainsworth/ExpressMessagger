import express from 'express'
const router = express.Router()

router.post('/signIn', async (req, res) => {
    res.send('hello')
})

router.post('/signUp', async (req, res) => {
    res.send('hello')
})

export default router;