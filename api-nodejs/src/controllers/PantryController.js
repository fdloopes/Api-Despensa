const { Pantry } = require('../models');

module.exports = {
    async all(req,res) {
        const pantries = await Pantry.findAll();
        
        return res.json(pantries);
    },
    async show(req,res){
        const pantry = await Pantry.findByPk(req.params.id);

        return res.json(pantry);
    },
    async create(req,res){
        const pantry = await Pantry.create(req.body);

        return res.json(pantry);
    },
    async update(req,res){
        await Pantry.update(req.body,{
            where: {
                id: req.params.id,
            }
        });

        const pantry = await Pantry.findByPk(req.params.id);
        return res.json(pantry);
    },
    async delete(req,res){
        const pantry = await Pantry.destroy({
            where:{
                id:req.params.id
            }
        });
        return res.json(pantry);
    }
};