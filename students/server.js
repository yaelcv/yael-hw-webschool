const http = require ("http");
const PORT = 1702;
const fs = require ("fs");
const path = require ("path");
const dir = path.join(__dirname + "/./pages");

const server = http.createServer((req, res)=>{
    const method = req.method; 
    const url = req.url;
    console.log("method", method);
    
    switch (url) {
        case "/":
            const homePage = fs.readFileSync(dir + "/home/home.html");
            res.end(homePage);
                break;
        case "/home.css":
            const homeCss = fs.readFileSync(dir + "/home/home.css");
            res.end(homeCss);
                break;
        case "/home.js":
            const homeJs = fs.readFileSync(dir + "/home/home.js");
            res.end(homeJs);
                break;
        case "/btn-create":
            //???
            res.end(?);
        case "/btn-delete":
            //??
            res.end(?);
        case "/btn-update":
            //??
            res.end(?);       
        case "/show":
            const show = fs.readFileSync(dir + "/show/show.html");
            res.end(show);
            break;
        case "/btn":
           // res.end("hi from btn server");
            break;
        case "/show.css":
            const cssShow = fs.readFileSync(dir + "/show/show.css");
            res.end(cssShow);
            break;
        case "/update":
            const update = fs.readFileSync(dir + "/update/update.html");
            res.end(update);
            break;
        case "/update.css":
            const cssUpdate = fs.readFileSync(dir + "/update/update.css");
            res.end(cssUpdate);
            break;
        case "/update.js":
            const jsUpdate = fs.readFileSync(dir + "/update/update.js");
            res.end(jsUpdate);
                break;
        default:
            const err = fs.readFileSync(dir + "/404.html");
            res.end(err);
            break;
    }
 });
server.listen(PORT);

