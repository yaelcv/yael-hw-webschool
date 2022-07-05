const fs = require ("fs");
const { removeListener } = require("process");
const args = process.argv.slice(2);
const activity = (args[0]);
const productHint = (args[1]);
const products = [{name:"", codeProduct:, price:}];


class product {
    constructor(name, codeProduct, price) {
        this.name = name;
        this.codeProduct = codeProduct;
        this.price = price;
    }
}

functions addProduct (productHint){
    if (productHint !== products.includes)
    console.log ("Please Enter Product Name, Code and Price" )
}

const newProduct = new product ((args[0],
    
    ))


function findProduct() {
   if (productHint == products.includes){
    var index = products.indexOf
    var name = products.indexOf
    return 
   }
}



const functions = require ("./api.js");
functions.read();
functions.create();
functions.del();
functions.update();

switch (activity) {
    case read:
        functions.read();
        break;
    case create:
        functions.create();
        break;
    case del:
        functions.del();
    break;
    case update:
        functions.update();
    break;
        default:
    console.log ("error")
        break;
}

function sum (){

}