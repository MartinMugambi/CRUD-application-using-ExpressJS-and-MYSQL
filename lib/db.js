var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'ENTER MYSQL_USERNAME_HERE',
	password:'ENTER_MYSQL_PASSWORD HERE',
	database:'book'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;