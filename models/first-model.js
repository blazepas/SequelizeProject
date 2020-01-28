// const {Sequelize} = require('sequelize');
// const seq = require('./routes');
// const {Sequelize} = seq.sequelize;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});

class myModel extends Sequelize.Model{
  //Associate myModel to pool of models
  static associate(models){
    this.myAssociation = models.myModel.belongsTo(models.otherModels);
  }
  //Initialising with data types
  static init(sequelize, DataTypes){
    return super.init(
      this.init = init {
      planetName: { 
        type: DataTypes.STRING,
        defaultValue: 'Jupiter'
      },
      size: DataTypes.INTEGER
    }, {
  //Create model name for sequelize    
      modelName: 'myModel',
  //Table name
      tableName: 'myModel',
      sequelize
    });
  };
  //Wrap queries with getter
    static getId(where){
      return this.findOne({
        where,
        attributes: ['id'],
        order: [['createdAt','DESC']]
    });
  };
  //Instance method
  getFullName(){
    return `${this.planetName} ${this.size}`
  }
  setFullName(fullName){
    const names = fullName;
    this.planetName = names;
  }
};  
  
  // display(){
  //   const textInfo = "msg from class";
  //   return textInfo;
  // } 


// module.exports.starw = starw;
module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;
module.exports.myModel = myModel;