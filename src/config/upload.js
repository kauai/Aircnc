const multer = require('multer')
const path = require('path')

module.exports = {
   storage:multer.diskStorage({
     destination:path.resolve(__dirname,"..","..","uploads"),
     filename:(req,file,cb) => {
         const ext = path.extname(file.originalname)
         const name = path.basename(file.originalname, ext)

         const nowSpace = `${name}-${Date.now()}${ext}`
         
         const result = nowSpace.split(' ').map(item => item.trim()).join('')
         //cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
         cb(null,result)
     }
   })
}