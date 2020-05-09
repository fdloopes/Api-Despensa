const { SharedPantry, Pantry, User } = require('../models');

module.exports = {

    async all(req,res) {
        const sharedPantries = await SharedPantry.findAll();
        
        return res.json(sharedPantries);
    },
    
    async show(req,res){

        let sharedPantry = [];
        if(req.params.idPantry != null && req.params.idUser != 0){
            sharedPantry = await SharedPantry.findAll({
                where: {
                    idPantry: req.params.idPantry,
                    idUser: req.params.idUser
                }
            });
        }else if(req.params.idPantry == null){
            sharedPantry = await SharedPantry.findAll({
                where: {
                    idUser: req.params.idUser
                }
            });
        }else if(req.params.idUser == 0){
            sharedPantry = await SharedPantry.findAll({
                where: {
                    idPantry: req.params.idPantry
                }
            });
        }

        return res.json(sharedPantry);
    },

    async create(req,res){
        let sharedPantry = [];
        const pantry = await Pantry.findByPk(req.body.idPantry);
        if(pantry.idOwner == req.body.owner){
            if(pantry.shared == true){
                object = {
                    idPantry: req.body.idPantry,
                    idUser: req.body.idUser
                }
                sharedPantry = await SharedPantry.create(object);
            }else{
                sharedPantry = 3; // Dispensa privada
            }
        }else{
            sharedPantry = 2; // Usuario não coincide com responsavel
        }
        return res.json(sharedPantry);
    },

    async update(req,res){
        let sharedPantry = [];
        sharedPantry = await SharedPantry.findAll({
            where: {
                idPantry: req.params.idPantry,
                idUser: req.body.idUser
            }
        });
        if(sharedPantry == 0){
            const pantry = await Pantry.findByPk(req.params.idPantry);
            if(pantry != null){
                if(pantry.idOwner == req.body.owner){
                    const user = await User.findByPk(req.params.idUser);
                    if(user != null){
                        if(pantry.shared == true){
                            object = {
                                idUser: req.body.idUser
                            }
                            sharedPantry = await SharedPantry.update(object,{
                                where:{
                                    idPantry: req.params.idPantry,
                                    idUser: req.params.idUser
                                }
                            });
                        }else{
                            sharedPantry = 6; // Despensa privada
                        }    
                    }else{
                        sharedPantry = 5; // Usuario não existe
                    }
                }else{
                    sharedPantry = 4; // Usuario não coincide com responsavel
                }
            }else{
                sharedPantry = 3 // Despensa não existe
            }
            sharedPantry = await SharedPantry.findAll({
                where: {
                    idPantry: req.params.idPantry,
                    idUser: req.body.idUser
                }
            });
            sharedPantry == 0 ? sharedPantry = 7 : sharedPantry; // Associação para atualizar não existe
        }else{
            sharedPantry = 2 // Usuário já associado a despensa
        }
        return res.json(sharedPantry);
    },

    async delete(req,res){

        let sharedPantry = [];
        const pantry = await Pantry.findByPk(req.params.idPantry);
        if(pantry.idOwner == req.body.owner){
            sharedPantry = await SharedPantry.destroy({
                where:{
                    idPantry:req.params.idPantry,
                    idUser:req.params.idUser
                }
            });
        }
        return res.json(sharedPantry);
    }
};