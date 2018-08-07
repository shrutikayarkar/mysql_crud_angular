var con = require("../config/connect");

module.exports.insert = function (obj,cb) {
	con.connect(function(err){
		var que = "INSERT INTO user(name,email,address,gender,city,hobbies)VALUES('"+obj.name+"','"+obj.email+"','"+obj.address+"','"+obj.gender+"','"+obj.city+"','"+obj.hobbies+"')";
		con.query(que,cb);
	});
}

module.exports.find = function (cb) {
	con.connect(function(err){
		var que = "SELECT * FROM user";
		con.query(que,cb);
	});
}

module.exports.delete = function (obj,cb) {
	con.connect(function(err){
		var que = "DELETE FROM user WHERE id='"+obj.id+"'";
		con.query(que,cb);
	});
}

module.exports.update = function (where,obj,cb) {
	con.connect(function(err){
		var que = "UPDATE user SET name='"+obj.name+"',email='"+obj.email+"',address='"+obj.address+"',gender='"+obj.gender+"',city='"+obj.city+"',hobbies='"+obj.hobbies+"'WHERE id='"+where.id+"'";
		con.query(que,cb);
	});
}