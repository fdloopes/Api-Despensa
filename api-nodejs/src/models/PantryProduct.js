module.exports = (sequelize, DataTypes) => {
    const PantryProduct = sequelize.define('PantryProduct', {
      idPantry: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      idProduct: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      validity: DataTypes.DATE,
      amount: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
    return PantryProduct;
  }