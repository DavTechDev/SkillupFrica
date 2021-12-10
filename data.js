// ASSESSMENT 1
// Clone the repo https://github.com/BigB97/SkillupFrica.git

// Create a directory "Data"

// let fs = require('fs');
// fs.mkdirSync('data');


// // // Read the data.json file
// let fs = require('fs');
// let readMe = fs.readFileSync('data.json', 'utf8');
// // console.log('Successfully Read JSON file =>' + '', readMe);



// // // Write the data.json to "Data" directory with the name "object.json"

// fs.writeFileSync('object.json', readMe);

// // And deleting the Directory and the "Object.json" data

// fs.rmdirSync('data');





// ASSESSMENT 2 

// Using Nodejs creat a server, running on port 3050, responding with statuscode "201" 
// and a message "Hello World, {Your Fullname} is changing the world"


let http = require('http');

let server = http.createServer(function(req, res){
    res.writeHead(201, {'Content-Type': 'text/plain'});
    res.end('Hello World, Anuoluwa Akinsola is changing the world');
});

server.listen(3050, '127.0.0.1');
console.log('Anu has been graciously blessed, this server is running on 3050');
