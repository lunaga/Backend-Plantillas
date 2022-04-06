const express = require ('express')
const app= express()
const api = require('./routes/apiproductos')
app.use(api)
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views','./views')

PORT = process.env.PORT || 8080

const server = app.listen(PORT,() => {
    console.log(`Escuchando servidor desde el puerto ${PORT}`)
})
server.on('error', error => console.log('Error en el servidor', error))

