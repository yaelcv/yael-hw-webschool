const fs = require ("fs");

function read(){
    fs.readFileSync("./cart.js");
}

function create(){
    fs.writeFileSync("./cart.js");
}

function del(){
    fs.writeFileSync("./cart.js", "");
}

function update(){
    fs.readFileSync("./cart.js");
}

module.exports = {read, create, del, update};

