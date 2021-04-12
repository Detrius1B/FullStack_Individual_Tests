const express = require('express')
const productRouter = require('./routes/product')
const clientRouter = require('./routes/client')
const cardRouter = require('./routes/card')

const PORT = process.env.PORT || 6969
const app = express()

app.use(express.json())
app.use('/api', productRouter)
app.use('/api', clientRouter)
app.use('/api', cardRouter)

app.get('/', (req, res) => {
    res.send('just home page, look at test_request.rest file for info')
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


// https://monsterlessons.com/project/lessons/modeli-i-kontrollery-v-express
// http://expressjs.com/ru/4x/api.html#app.use