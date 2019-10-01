const multer = require('multer')
const path = require('path')
const User = require('../models/User')

module.exports = {
   storage:multer.diskStorage({

     destination:path.resolve(__dirname,"..","..","uploads"),
     filename:async (req,file,cb) => {

         const { user_id } = req.headers
         const user = await User.findById(user_id)
         let error = null
         
         if(!user){
            error = {msg:"Usuario nao existe"}
            cb(new Error('Usuario nao encontrado'),false)
         }else{
             const ext = path.extname(file.originalname)
             const name = path.basename(file.originalname, ext)
    
             const nowSpace = `${name}-${Date.now()}${ext}`
             
             const result = nowSpace.split(' ').map(item => item.trim()).join('')
             cb(error,result)
         }


         //cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
         
     }
   })
}