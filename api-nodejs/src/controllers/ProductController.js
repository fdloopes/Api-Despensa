const { Product } = require('../models');

module.exports = {
    async all(req,res) {
        const products = await Product.findAll();
        
        return res.json(products);
    },
    async show(req,res){
        const product = await Product.findByPk(req.params.id);

        return res.json(product);
    },
    async create(req,res){
        const product = await Product.create(req.body);

        return res.json(product);
    },
    async update(req,res){
        const product = await Product.update(req.body,{
            where: {
                id: req.params.id,
            }
        });

        return res.json(product);
    },
    async delete(req,res){
        const product = await Product.destroy({
            where:{
                id:req.params.id
            }
        });
        return res.json(product);
    }
};