import { Router } from 'express'

const router = new Router()

router.post('/registration')
router.post('/login')
router.post('/logout')
router.get('/refresh')

export { router }