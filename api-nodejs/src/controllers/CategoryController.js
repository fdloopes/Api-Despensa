const { Category } = require('../models');

module.exports = {
    async all(req,res) {
        const categories = await Category.findAll();

        return res.json(categories);
    },
    async show(req,res){
        const category = await Category.findByPk(req.params.id);

        return res.json(category);
    },
    async create(req,res){
        const category = await Category.create(req.body);

        return res.json(category);
    },
    async update(req,res){
        await Category.update(req.body,{
            where: {
                id: req.params.id,
            }
        });

        const category = await Category.findByPk(req.params.id);
        return res.json(category);
    },
    async delete(req,res){
        const category = await Category.destroy({
            where:{
                id:req.params.id
            }
        });
        return res.json(category);
    }
};