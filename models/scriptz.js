module.exports = function(sequelize, DataTypes) {
    var scriptz = sequelize.define("scriptz", {
      prescription_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dose: {
        type: DataTypes.INTEGER, 
        allowNull: false
      },
      TimeFrame: {
          type: DataTypes.STRING,
          allowNull: true
      },
      Pills_Remaining:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }

    },{
       freezeTableName: true,
       timestamps: false
    });


    return scriptz;
  };