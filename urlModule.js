var http= require('http')
var url= require("url")
var fs= require('fs')


http.createServer(function(req,res){
    var q= url.parse(req.url,true)
    var filename="."+ q.pathname

    fs.readFile(filename, function(err,data){
        if(err){
            res.writeHead(404, {'Content-Type':'text/html'})
            return res.end('Page Not Found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8000)

// var address= 'http://localhost:3000/admin/device-management/deviceId=1001?input_device=sensor'

// var q= url.parse(address,true)

// console.log(q.host)
// console.log(q.pathname)
// console.log(q.query)

