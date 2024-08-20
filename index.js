import express from 'express'
import jwt from 'jsonwebtoken'
import { sequelize } from './config/db.js'
import { SERVER_PORT } from './utils/secrets.js'

const PORT = SERVER_PORT || 4444
const app = express()

app.use(express.json())


app.post('/auth/login', (req, res) => {
    const token = jwt.sign({
        email: req.body.email,
        username: req.body.username
    }, 'secret')
    res.json({
        success: 'OK',
        token
    })
})


const startApp = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection established')
        app.listen(PORT, (err) => {
            if (err) {
                return console.log('ERROR', err)
            }
        
            console.log(`SERVER STARTED at PORT ${PORT}`)
        })
    } catch (err) {
        console.log('Невозможно соединиться с базой данных: ', err)
    }
}

startApp()