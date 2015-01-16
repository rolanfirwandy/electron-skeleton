var conn = require("./db_conn");
var db = conn.getConn();

exports.test = function() {
	db.authenticate().complete(function(err) {
		if (!!err) {
    		console.log('Unable to connect to database:', err);
		} else {
    		console.log('Connection has been established successfully');
		}
	})
};

exports.defineApiRequest = function() {
	db.define('api_request', {
		nonce: db.STRING,
		command: db.STRING,
		merchant_id: db.STRING,
		merchant_code: db.STRING,
		request_path: db.STRING,
		params: db.MEDIUMTEXT,
		method: db.STRING,
		requested_at: db.DATE
	})
};

exports.addApiRequest = function() {
	apiRequest.create({
		nonce: "test123",
		command: "test",
		merchant_id: "merchantA",
		merchant_code: "lalala",
		params: "default",
		method: "POST",
		requested_at: new Date()
	})
};
