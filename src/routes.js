const express = require('express')
const routes = express.Router()
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')

const upload = multer(uploadConfig)

routes.post('/sessions',SessionController.store)
routes.post('/spots',upload.single('thumbnail'),SpotController.store)

module.exports = routes 