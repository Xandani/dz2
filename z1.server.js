const http = require('http');
const port = 3000;
const z2 = require('./z2');
let f = 0; let i = 0;

const server = http.createServer(function(req, res){
    console.log(req.url);
    if ((f == 1) && ((req.url) != (`/favicon.ico`))) {
        i++;
    }

    if ((req.url) == '/user'){
        res.end(z2.message + `\nbtw, ti zashel v ${i} raz`);
    }

    else {
        res.end(`Welcome, ti zashel v  ${i}  raz`);
    }
    
});

server.listen(port, function(err){
    if (err) {
        return console.log('Error!', err);
    }
    else {
        console.log(`Server is listening on ${port}`);
        f = 1;
    }
});


