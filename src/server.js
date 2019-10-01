const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes')
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/omnistack09',{
     useCreateIndex: true,//sem essa config da erro
     useNewUrlParser:true,
     useUnifiedTopology:true
})

app.use(express.json())
app.use(routes)

app.listen(PORT,(e) => {
    if(e) console.log(e)
    console.log('Server to run port 3000')
})