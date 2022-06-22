const mongoConnect = require('./mongodb');



async function data() {
    let data =await mongoConnect();
    let result = await data.find().toArray();

  console.log(result)
    
}
data();
