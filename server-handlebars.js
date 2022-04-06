const express = require('express')
const app = express()
const api = require('./routes/api')
app.use(api)
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const handlebars = require('express-handlebars')
app.engine('hbs', handlebars.engine(
    {
        extname: 'hbs',
        defaultLayout: 'main.hbs',
        layoutsDir: '/views/layouts',
    }
))

app.set('view engine', 'hbs')
app.set('views', '/views')

PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Escuchando servidor desde el puerto ${PORT}`)
})
server.on('error', error => console.log('Error en el servidor', error))