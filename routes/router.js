const async = require('async');
const await = require('await');
// const {Client} = require('pg');
// const connectionString = "postgres://postgres:postgres@localhost:5432/postgres";
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize();
const FirstModel = require('../models/first-model');
const sequelize = FirstModel.sequelize;
const Sequelize = FirstModel.Sequelize;
// const config = require('../config/config');
// config.development;

// const path = require('path');
// module.exports = {
//   'config' : path.resolve('config', 'config.js')
// }

// config.development;
// module.config();

//Passing here myModel config

// const modd = new FirstModel.myModel();
// modd.init(sequelize, Sequelize);

const models = {
  First : FirstModel.init(sequelize, Sequelize)
}

// const models = init

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

  // sequelize.addModel(FirstModel);
  // const db = {models, sequelize};


// const starwLink = require('../models/first-model.js/index.js.js');
// const starr = new starww.starw;
// starr.init();
// const newInstance = new starwLink.starw();
// newInstance.display();

// newInstance.init({
//   // id: PK,
//   planetName: { 
//     type: DataTypes.STRING,
//     defaultValue: 'Jupiter'
//   },
//   size: DataTypes.INTEGER
// }, {
//   modelName: 'starw',
//   tableName: 'starw'
// });

// class starw extends Model{}
// starw.init({
//     planetName: { 
//       type: DataTypes.STRING,
//       defaultValue: 'Jupiter'
//     },
//     size: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'starw',
//     tableName: 'starw'
//   });

//   sequelize.models.starw
//   Model.starw
//   sequelize.define
// starw.getTableName().schema

// sequelize.import

exports.addSeq = function(req,res,next){ 
starr.sync({force: false}).then(() => {
  // Table created
  return starw.create({
    planetName: req.body.driverNameSeq,
    size: 34933
  });
});

res.status(200).send("Record added");
}

exports.delDriver = function(req, res, next){
starw.sync().then(() =>{
  return starw.destroy({
    where: {
      planetName: req.body.driverNameDel
    }
  });
});
res.status(200).send("Record erased");
};


exports.showDrivers = function(req, res, next){
sequelize.models.FirstModel.findAll({attributes: ['planetName']}).then(function(resultFromFind){
  var planetList = [];
  for(var i=0; i<=resultFromFind.length-1; i++){
    console.log(resultFromFind[i].planetName);
    planetList +=resultFromFind[i].planetName + ", ";
  }
  //test
  console.log(starw[1].planetName);
  res.render('drivers', {
    planetList : planetList,
  })
});
};

exports.editOneDriver = function(req, res, next){
starw.findByPk({attributes: [req.params.id]}).then(function(result){

  res.render('editor', {
    result : result,
    title : "Edit order"
  });
});
};
  // starw.findByPk(req.params.id).then((result) => {
 

exports.updateOrder = function(req, res, next){
  starw.findOne({order: [planetName]}).then(function(result){
    res.render('editor', {
      result : result
    });
  });
}

// starw.findByPk(req.params.whichOrderUp).then((result) => {
//   return starw.update(req.body);
// }).then((result) => {
//   res.redirect(result.id);
// });
// };

// exports.updateOrder = function(req, res, next){
//   console.log(req.params.whichOrderUp);
// starw.update({
//   planetName: 'PlanetP'
// }, {
//   where: {
//     id: req.params.whichOrderUp
//   }
// }).then(() => {
//   console.log('Updated');
// }).catch((e) => {
//   console.log("Error"+e);
// });
// };

// exports.updateOrder = function(req, res, next){
//   return{
//     update: function(req, res){
//       starw.req.params.id = req.body;
//       starw.save().success(function (results){
//         res.send(200);

//       })
//     }
//   }
// }

//Optionally
// exports.updateOrder = function(req, res, next){
//   // const searchedOrder = req.body.whichOrderUp;
//   const searchedOrder = "Mars";
//   const replaceOnNewValue = "Saturn";
//   starw.findAll({attributes: ['planetName']}).then(function(resultFromFind){
//     for(var i=0; i<=resultFromFind.length-1; i++){
//       //check if match
//       if(resultFromFind == searchedOrder){
//         console.log("This record exists in db");
//         //change on new data update
//         resultFromFind = replaceOnNewValue;
//       }
//     }
//     res.status(200).send(`Updated on ${resultFromFind}`)

//   });
//   };

  // exports.updateOrder = function(req, res, next){
  //   var findOrderId = find(req.params.whichOrderUp);
  //   starw.planetName = "PP";
  //   res.redirect(starw.id);
  // }

  // var findOrderId = find(req.params.whichOrderUp);
  //   starw.planetName = req.body.updateOrder;
  //   res.send(starw.id);

// exports.updateOrder = ('/starw/:whichIdOrderUp', function(req, res, next){
//   starw.update(
//     {planetName: req.body.updatedData},
//     {where: req.params.whichIdOrderUp}
//   )
//   .then(function(rowsUpdated) {

//   })
// })

// exports.updateOrder = function(req, res, next){
//   starw.findOne({
//     where: {
//       id: 1
//     }
//   })
//     .on('success', function(checkID){
//       if(checkID){
//         checkID.update({
//           planetName: 'Planet'
//         })
//     .success(function(){})
//       }
//     })
// }

// exports.updateOrder = function(req, res, next){
// const updateResult = req.body.updatedData;
// const tochange = req.body.whichIdOrderUp;
// // console.log(updateResult, tochange);
// starw.sync({force: false}).then(() => {
//  return starw.update({planetName: req.body.updatedData}
//   ,{
//     where: {
//       id: req.params.whichIdOrderUp
//     }
//   });
// });
// res.status(200).send(`Order updated to ${updateResult}`)
// };


/* Route handlers */
/* GET home page. */
exports.mortadela = function(req, res, next) {
  var starw = "Hello there";
  res.render('index', { 
    starw: starw,
    title: 'Express' });
};

const client = new Client({
  connectionString : connectionString
});
client.connect();


exports.add = function(req, res) {
  const driverNameVal = req.body.driverName;
  console.log(driverNameVal);
  const queryString = "INSERT INTO manufacture(name) VALUES($1) RETURNING *";
  const values = [driverNameVal];

  client.query(queryString, values, function(err, res){
   
      console.log("Succesfully added");
  });

  res.send(`Driver ${driverNameVal} added to database!`);
};

exports.show = function(req, res) {
  const columnName = "name";
  const coumnNameCity = "city";
  const columnNameCountry = "country";
  const queryString = "Select ($1) from manufacture";
  const values = [columnName, coumnNameCity, columnNameCountry];
  client.query("Select * From manufacture", function(err, resdb){
    res.status(200).send(resdb.rows);
  });
};


// module.exports = router
// module.exports.sequelize = sequelize;