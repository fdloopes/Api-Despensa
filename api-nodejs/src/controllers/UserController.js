const { User } = require('../models');

module.exports = {
    async all(req,res) {
        const users = await User.findAll();

        return res.json(users);
    },
    async show(req,res){
        const user = await User.findByPk(req.params.id);

        return res.json(user);
    },
    async create(req,res){
        const user = await User.create(req.body);

        return res.json(user);
    },
    async update(req,res){
        const user = await User.update(req.body,{
            where: {
                id: req.params.id,
            }
        });

        return res.json(user);
    },
    async delete(req,res){
        const user = await User.destroy({
            where:{
                id:req.params.id
            }
        });
        return res.json(user);
    }
};