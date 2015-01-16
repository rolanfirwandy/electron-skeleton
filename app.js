var Sequelize = require('sequelize')
, sequelize = new Sequelize('yojimbo', 'root', '', {
  dialect: "mysql", port: 3306
})

var user = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
})

sequelize.sync().success(function() {
  user.create({
    username: 'Rolan',
    birthday: new Date(1984, 11, 11)
  }).success(function(Rolan){
    console.log(Rolan.values)
  })
})

// sequelize.authenticate().complete(function(err) {
//   if (!!err) {
//     console.log('Unable to connect to database:', err)
//   } else {
//     console.log('Connection has been established successfully')
//   }
// })