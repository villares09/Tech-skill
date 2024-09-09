const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  const Evento = sequelize.define('Evento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDateTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDateTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  pacienteId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  // Agrega más campos según tus necesidades
}, {
  freezeTableName: true, // Esto evitará la pluralización del nombre de la tabla
});
    return Evento;
};
