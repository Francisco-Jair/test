const express = require('express')
const controller = require('../controllers/product-controllers')

const router = express.Router();

router.get('/', controller.get)
router.get('/:slug', controller.getBySlug)
router.get('/admin/:id', controller.getById)
router.get('/tags/:tag', controller.getByTag)
router.post('/', controller.post)
router.put('/:id', controller.put)
router.delete('/', controller.delete)


module.exports = router;