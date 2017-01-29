/**
module for creating http server

**/

var http=require("http");
var hostname="localhost";
var port=3000;
var STATUS_OK=200;


// creating an instance of the server
//req-request coming from user
//res-response from server to user
//
var server=http.createServer(function(req,res){
	console.log(req.headers);
	//setting the content-type to html
	//200-status code (ok)
	res.writeHead(STATUS_OK,{'content-type':'text/html'});
	//making an html adding to response
	res.end('<html><body><h1>hello world</h1></body></html>');
	});

//starting server and listening on port
//if this method is removed there is nothing to listen to by the server
server.listen(port,hostname,function(){
	console.log(`server running at http://${hostname}:${port}/`);
	
});
