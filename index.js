import express from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { sequelize } from './config/db.js'
import { SERVER_PORT } from './utils/secrets.js'
import { router } from './routes/router.js'


const PORT = SERVER_PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)

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