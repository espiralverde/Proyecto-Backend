const express = require('express')
require('dotenv').config()
const Contenedor = require('./contenedor')

const products = new Contenedor('productos.txt')
const app = express()
const PORT = process.env.PORT || 3000


app.get('/', (_req, res) => {
    res.send ({
        health: "Up",
        success: true
    })
})

app.get('/productos', async (_req, res) => {
    const productosTodos = await products.getAll()
    res.send(`${JSON.stringify(productosTodos, null, 2)}`)  
})

app.get('/productoRandom', async (_req, res) => {

    const productosTodos = await products.getAll()
    const randomIndex = Math.floor(Math.random() * productosTodos.length)
    res.send(`${JSON.stringify(productosTodos[randomIndex], null, 2)}`)

})

const server = app.listen(PORT, () => {
    console.info(`Server up and running on Port ${PORT}`)
})