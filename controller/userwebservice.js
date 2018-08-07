var express = require("express");
var router = express.Router();
var user = require("../model/user");

router.post("/",function (req,res) {
	user.insert(req.body,function(err,result){
		res.send(result);
		// console.log(result);
	});
});

router.get("/",function (req,res) {
	user.find(function(err,result){
		res.send(result);
		// console.log(result);
	});
});

router.delete("/",function (req,res) {
	user.delete({id:(req.query.id)},function(err,result){
		res.send(result);
		// console.log(result);
	});
});

router.put("/",function (req,res) {
	user.update({id:(req.body.id)},req.body,function(err,result){
		res.send(result);
		// console.log(result);
	});
});

module.exports = router;