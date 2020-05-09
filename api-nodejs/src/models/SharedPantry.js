module.exports = (sequelize, DataTypes) => {
    const SharedPantry = sequelize.define('SharedPantry', {
      idPantry: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
    return SharedPantry;
  }