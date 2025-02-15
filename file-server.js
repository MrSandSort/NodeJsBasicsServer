var http= require('http')
var fs= require('fs') // fs stands for fileserver

http.createServer(function(req,res){
    fs.readFile('practics.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(9000)