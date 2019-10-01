const Spot = require('../models/Spot')

module.exports = {
    async store(req, res) {
        // console.log(req.body)
        // console.log(req.file)
        const { filename } = req.file
        const { company, techs, price } = req.body
        const { user_id } = req.headers
        const spot = await Spot.create({
            user:user_id,
            thumbnail:filename,
            company,
            techs: techs.split(',').map(item => item.trim()),
            price
        })
        
        return res.json(spot)
    }
}