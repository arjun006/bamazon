var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "junard#6",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    
  });
  connection.end();
};

inquirer.prompt([{
  name:"item_id",
  type:"input",
  message:"What is the ID of the product you would like to buy?\""
},
{
  name:"stock_quantity",
  type:"input",
  message:"How many do you want to purchase?"
}
]).then(function(product){
  var product = product.item_id;
  var quantity = product.stock_quantity;

  console.log(product);
  console.log(quantity);

  var query = "SELECT * FROM products WHERE ?";
  connection.query(query,{item_id:item}, function(err,data){
  })

})


