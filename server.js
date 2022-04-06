// const express = require('express')
// const { id } = require('./db/productos.js')

// const Contenedor = require('./db/productos.js')
// const path = './productos.txt'
// const productos = new Contenedor(path)
// const app = express()
// const api = express.Router()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(api)
// app.use(express.static('public'))


// api.use(function (req, res, next) {
//     if (req.originalUrl === '/api/productos/:id') {
//         if (req.method === 'POST') {
//             req.method = 'PUT'
//         }
//     }
//     next()
// })

// api.get('/api/productos', (_, res) => {
//     productos.getAll().then((result) => { res.send(result) })
// })

// api.get('/api/productos/:id', (req, res) => {
//     const { id } = req.params
//     productos.getById(Number(id))
//         .then((result) => { res.send(result || { error: "No se encuentra dicho producto" }) })
// })

// api.post('/api/productos', (req, res) => {
//     const nuevoProd = req.body
//     productos.save(nuevoProd)
//     res.send({ Productos: 'Nuevo producto agregado a la lista' })
// })


//     api.put('/:id', (req, res) => {
//         productos.modifyById(req.body, req.params.id)
//         res.send({ obj: 'Se modifico correctamente el producto' })
// })

// api.delete('/:id', (req, res) => {
//     const { id } = req.params
//     productos.deleteById(Number(id))
//     res.send('' || { error: 'No se encuentra el producto' })
// })





// PORT = process.env.PORT || 8080

// const server = app.listen(PORT, () => {
//     console.log(`Servidor escuchando desde http://localhost:${PORT}`)
// })
// server.on('error', error => console.log('Error', error))