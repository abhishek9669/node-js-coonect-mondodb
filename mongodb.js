const {MongoClient} = require("mongodb");
let database = "code-step-by-step";

const url = "mongodb://localhost:27017";

const clint = new MongoClient(url);

async function mondoConnect(){
    let client =await clint.connect();
    let result=  client.db(database).collection("node tut");
    console.log(result)
    return result;

}
module.exports = mondoConnect;