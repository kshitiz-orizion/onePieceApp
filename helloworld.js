var http=require("http");
var hostname="localhost";
var port=3000;
var server=http.createServer(function(req,res){
	console.log(req.headers);
	res.writeHead(200,{'content-type':'text/html'});
	res.end('<html><body><h1>hello world</h1></body></html>');
	})
server.listen(port,hostname,function(){
	console.log(`server running at http://${hostname}:${port}/`);
})