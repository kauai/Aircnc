const express = require('express')
const routes = express.Router()
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashBoardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

const upload = multer(uploadConfig)

routes.post('/sessions',SessionController.store)
routes.get('/spots',SpotController.index)
routes.post('/spots',upload.single('thumbnail'),SpotController.store)
routes.get('/dashboard',DashBoardController.show)
routes.post('/spots/:spot_id/bookings',BookingController.store)

module.exports = routes 