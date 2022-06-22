//1 mongodb packege install

// import mongoclint
const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "code-step-by-step";
//conect mongodb and url
const clint = new MongoClient(url);


async function getData(){
    let result =await clint.connect();
    let db1 = result.db(database);
    let query = db1.collection("node tut");
    let res = await query.find().toArray();

    console.log(res);

}
getData();