const express = require('express')
require('dotenv').config()
const Contenedor = require('./contenedor')

const products = new Contenedor('products.txt')
const app = express()
let count = 0

app.get('/', (_req, res) => {
res.send({
    health: 'Up',
    success: true
})
})

app.get('/productos', async (_req, res) => {
const productsAll = await products.getAll()

res.send(`${JSON.stringify(productsAll, null, 2)}`)
})

app.get('/productoRandom', async (_req, res) => {
const productsAll = await products.getAll(),
    prodsAmount = productsAll.length,
    randomIndex = Math.floor(Math.random() * prodsAmount)

res.send(`${JSON.stringify(productsAll[randomIndex], null, 2)}`)
})

app.get('/ping', (_req, res) => {
res.send('<h1>Pong</h1>')
})

const PORT = process.env.PORT || 3000

const service = app.listen(PORT, () => {
console.info(`Server Up and running on port ${PORT}`)
})