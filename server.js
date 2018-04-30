const express = require("express"),
	webpack = require("webpack"),
	webpackDevMiddlewawre = require("webpack-dev-middleware"),
	config = require("./webpack.config.js"),
	compiler = webpack(config),
	app = express(),
	port = 80,
	ip = "0.0.0.0";

app.use(express.static(__dirname+"/public"));

app.use(webpackDevMiddlewawre(compiler,{
	publicPath:config.output.publicPath,
	writeToDisk:true
}))
app.get("/",function (req,res){
	res.render("./dist/index.html");
});

app.listen(port, ip,function(){
	console.log("server is listening!");
});