const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());




const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://promise:promise@cluster0.rl8r12z.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection = client.db("promise").collection("data");
async function run(){
    try{
       app.get('/user/:id', async(req,res)=>{
        const id = req.params.id;
       
      
        const filter = {category : id};
        const result = collection.find(filter);
        const resultt = await result.toArray()
        res.send(resultt)
       })
       app.get('/user', async(req,res)=>{
       
        const filter = {};
        const result = collection.find(filter);
        const resultt = await result.toArray()
        res.send(resultt)
       })
       app.get('/userr/:id',async(req,res)=>{
        const id = req.params.id;
       
        const filter = {id : id};
        const result = await collection.findOne(filter);
        
        res.send(result)
       })
       app.get('/category/:category',async(req,res)=>{
        const Category = req.params.category;
        const filter = {category : Category};
        const result = collection.find(filter);
        const final = await result.toArray();
        res.send(final)
       })
    }
    finally{

    }
}

run().catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})