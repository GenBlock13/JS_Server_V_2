import express from 'express'

const app = express()

const PORT = 4444

app.get('/', (req, res) => {
    res.send('Hi!')
})

app.listen(PORT, (err) => {
    if (err) {
        return console.log('ERROR', err)
    }

    console.log(`SERVER STARTED at PORT ${PORT}`)
})