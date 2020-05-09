module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      name: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
    return Category;
  }