var Sequelize = require("sequelize");

var config    = require(__dirname + '/../config/db.json');
var sequelize = new Sequelize(config.database, config.username, config.password, {dialect: config.dialect, port: config.port});

// Get sequelize 
exports.getConn = function() {
	return sequelize;
}
