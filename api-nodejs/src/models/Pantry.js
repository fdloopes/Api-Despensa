module.exports = (sequelize, DataTypes) => {
    const Pantry = sequelize.define('Pantry', {
      name: DataTypes.STRING,
      shared: DataTypes.BOOLEAN,
      idOwner: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
    return Pantry;
  }