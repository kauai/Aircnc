//#index, #show, #update, #destroy
const User = require('../models/User')

module.exports = {
    //FILTRANDO EMAIL SE JA FOR EXISTENTE
    async store(req,res) {
       const { email } = req.body

       let user = await User.findOne({ email })

       if(!user) {
           user = await User.create({ email })
       }
       
       return res.json(user)
    }
}