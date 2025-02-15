var http= require('http');
var url= require('url')

// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('Our server is listening...')
//     res.write(req.url)
//     res.end()
// }).listen(8000)

http.createServer(function(req,res){
    console.log('Server is running successfully!!')
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q= url.parse(req.url,true).query
    var text= q.year +" "+ q.month
    res.write(text)
    res.end()
}).listen(9000)