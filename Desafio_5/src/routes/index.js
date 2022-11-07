const express = require('express')
const router = express.Router()
const products = require('./products')
router.use('/products', products)

router.get('/', (_req, res) => {
  res.render('pages/index', { page: 'form', title: 'Enter a product' })
})

module.exports = router
