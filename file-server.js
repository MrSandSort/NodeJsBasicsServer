var http= require('http')
var fs= require('fs') // fs stands for fileserver

//topics coverage readFile, appendFile, writeFile, open, unlink 

// http.createServer(function(req,res){
//     fs.readFile('practics.html',function(err,data){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })


// }).listen(9000)


// fs.appendFile('append.txt','Hello Sandesh ',function(err){
//     if (err) throw err;
//     console.log('Data appended to file');
// } )


http.createServer(function(req,res){

   
    
    // fs.unlink('new-file.txt', function(err){
    //     if(err) throw err;
    //     console.log('File deleted');
    // })
    fs.open('new-file.txt','w', function(err){
        if (err) throw err;
        console.log('File opened');
    })

    //  fs.writeFile('new-file.txt','New content added as the new file is created on a build', function(err){
    //     if (err) throw err;
    //     console.log('File created and content added');
    // })
}).listen(9000)

