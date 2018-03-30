module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true }
    },
    first_name:{
        type: DataTypes.STRING
      },
    last_name: {
        type: DataTypes.STRING
      },
    password:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },{
      timestamps: false
   });

    return user;
  };