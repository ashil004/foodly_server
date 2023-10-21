const express = require('express');
const app = express();
const cors = require('cors');
const port =process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// middleware
 
app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://pramanikashik007:utcrecSWeRGmnbnk@cluster0.tr0bgc6.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
  // await client.connect();
    
    const Brands = client.db("foodily").collection('Brand')
    app.get('/Brand', async (req ,res)=>{
      const cursor = Brands .find();
      const result = await cursor.toArray();
      res.send(result);
    })
    app.post('/Brand', async (req ,res)=>{
        const newBrand = req.body;
        console.log(newBrand);
        const result = await Brands.insertOne(newBrand);
        console.log(result);
        res.send(result);
    })
    const cocalola = client.db("foodily").collection('cocalola');
    
     app.get('/cocalola', async (req, res)=>{
      const cursor = cocalola .find();
      const result = await cursor.toArray();
      res.send(result);
     })

    app.post('/cocalola', async (req,res)=>{
      const newCocalola = req.body;
      console.log(newCocalola);
      const result = await cocalola.insertOne(newCocalola);
      console.log(result);
      res.send(result);
    })
    const mirinda = client.db("foodily").collection('mirinda');
    
     app.get('/mirinda', async (req, res)=>{
      const cursor = mirinda .find();
      const result = await cursor.toArray();
      res.send(result);
     })

    app.post('/mirinda', async (req,res)=>{
      const newmirinda = req.body;
      console.log(newmirinda);
      const result = await mirinda.insertOne(newmirinda);
      console.log(result);
      res.send(result);
    })
    const pepsi = client.db("foodily").collection('pepsi');
    
     app.get('/pepsi', async (req, res)=>{
      const cursor = pepsi .find();
      const result = await cursor.toArray();
      res.send(result);
     })

    app.post('/pepsi', async (req,res)=>{
      const newpepsi = req.body;
      console.log(newpepsi);
      const result = await pepsi.insertOne(newpepsi);
      console.log(result);
      res.send(result);
    })
    const coffie = client.db("foodily").collection('coffie');
    
     app.get('/coffie', async (req, res)=>{
      const cursor = coffie .find();
      const result = await cursor.toArray();
      res.send(result);
     })

    app.post('/coffie', async (req,res)=>{
      const newcoffie = req.body;
      console.log(newcoffie);
      const result = await coffie.insertOne(newcoffie);
      console.log(result);
      res.send(result);
    })
    const redBull = client.db("foodily").collection('redbull');
    
     app.get('/redbull', async (req, res)=>{
      const cursor = redBull .find();
      const result = await cursor.toArray();
      res.send(result);
     })

    app.post('/redbull', async (req,res)=>{
      const newredBull = req.body;
      console.log(newredBull);
      const result = await redBull.insertOne(newredBull);
      console.log(result);
      res.send(result);
    })

    const fanta = client.db("foodily").collection('fanta');
    
     app.get('/fanta', async (req, res)=>{
      const cursor = fanta .find();
      const result = await cursor.toArray();
      res.send(result);
     })

    app.post('/fanta', async (req,res)=>{
      const newfanta = req.body;
      console.log(newfanta);
      const result = await fanta.insertOne(newfanta);
      console.log(result);
      res.send(result);
    })
    

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/',(req ,res)=>{
    res.send('hello bangladesh');
});

app.listen(port,()=>{
   console.log(`Server is running on ${port}`); 
})