const { PantryProduct, Pantry, Product, SharedPantry} = require('../models');

module.exports = {

    async all(req,res) {
        const pantryProducts = await PantryProduct.findAll();
        
        return res.json(pantryProducts);
    },
    
    async show(req,res){
        let pantryProduct = [];
        if(req.params.idPantry != null && req.params.idProduct != 0){
            pantryProduct = await PantryProduct.findAll({
                where: {
                    idPantry: req.params.idPantry,
                    idProduct: req.params.idProduct
                }
            });
        }else if(req.params.idPantry == null){
            pantryProduct = await PantryProduct.findAll({
                where: {
                    idProduct: req.params.idProduct
                }
            });
        }else if(req.params.idProduct == 0){
            pantryProduct = await PantryProduct.findAll({
                where: {
                    idPantry: req.params.idPantry
                }
            });
        }

        return res.json(pantryProduct);
    },

    async create(req,res){
        let pantryProduct = [];
        const sharedPantry = await SharedPantry.findAll({
            where:{
                idPantry: req.body.idPantry,
                idUser: req.body.idUser
            }
        });
        const pantry = await Pantry.findAll({
            where: {
                id: req.body.idPantry,
                idOwner: req.body.idUser
            }
        });
        if(sharedPantry != 0 || pantry != 0){
            pantryProduct = await PantryProduct.create(req.body);
        }else{
            pantryProduct = 2; // Usuario não está associado a despensa
        }
        return res.json(pantryProduct);
    },

    async update(req,res){
        let pantryProduct = [];
        pantryProduct = await PantryProduct.findAll({
            where: {
                idPantry: req.params.idPantry,
                idProduct: req.params.idProduct
            }
        });
        if(pantryProduct != 0){
            const sharedPantry = await SharedPantry.findAll({
                where: {
                    idPantry: req.params.idPantry,
                    idUser: req.body.idUser
                }
            });
            const pantry = await Pantry.findByPk(req.params.idPantry);
            if(sharedPantry != 0 || pantry.idOwner == req.body.idUser){
                await PantryProduct.update(req.body,{
                    where:{
                        idPantry: req.params.idPantry,
                        idProduct: req.params.idProduct
                    }
                });
                pantryProduct = await PantryProduct.findAll({
                    where: {
                        idPantry: req.params.idPantry,
                        idProduct: req.params.idProduct
                    }
                });
            }else{
                pantryProduct = 3; // Usuario não existe ou não está associado a despensa
            }
            
        }else{
            pantryProduct = 2 // Produto não presente na despensa
        }
        return res.json(pantryProduct);
    },

    async delete(req,res){
        let pantryProduct = [];
        const sharedPantry = await SharedPantry.findAll({
            where:{
                idPantry: req.params.idPantry,
                idUser: req.body.idUser
            }
        });
        const pantry = await Pantry.findAll({
            where: {
                id: req.params.idPantry,
                idOwner: req.body.idUser
            }
        });
        if(sharedPantry != 0 || pantry != 0){
            pantryProduct = await PantryProduct.destroy({
                where:{
                    idPantry:req.params.idPantry,
                    idProduct:req.params.idProduct
                }
            });
        }else{
            pantryProduct = 2; // Usuario não está associado a despensa
        }

        return res.json(pantryProduct);
    }
};