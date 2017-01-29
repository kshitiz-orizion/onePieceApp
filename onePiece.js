var express=require('express');
var hostname="localhost";
var port=3000;
var app=express();

//giving access to public folder
app.use(express.static(__dirname + '/public'));
	//starting server and listening on port
app.listen(port,hostname,function(){
	console.log(`server running at http://${hostname}:${port}/`);
	
});