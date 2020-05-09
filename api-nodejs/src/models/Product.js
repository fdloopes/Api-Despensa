module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      name: DataTypes.STRING,
      idCategory: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
    return Product;
  }