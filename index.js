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
    await client.connect();
    
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

    const cocolas = client.db("foodily").collection(" cocolas")
    app.get('/cocolas', async (req ,res)=>{

      const  cursor =  cocolas .find();
      const result = await cursor. toArray();
      res.send(result);

    })
    app.post('/cocolas',async (req,res)=>{
      const newCocolas = req.body;
      const result = await cocolas.insertOne(newCocolas);
      res.send(result);
    })
    const mrindas = client.db("foodily").collection(" mrindas")
    app.get('/mrindas', async (req ,res)=>{

      const  cursor =  cocolas .find();
      const result = await cursor. toArray();
      res.send(result);

    })
    app.post('/mrindas',async (req,res)=>{
      const newCocolas = req.body;
      const result = await mrindas .insertOne(newCocolas);
      res.send(result);
    })

    const pepsie = client.db("foodily").collection(" pepsie")
    app.get('/pepsie', async (req ,res)=>{

      const  cursor =  cocolas .find();
      const result = await cursor. toArray();
      res.send(result);

    })
    app.post('/pepsie',async (req,res)=>{
      const newCocolas = req.body;
      const result = await pepsie .insertOne(newCocolas);
      res.send(result);
    })

    const coffiec = client.db("foodily").collection(" coffiec")
    app.get('/coffiec', async (req ,res)=>{

      const  cursor =  cocolas .find();
      const result = await cursor. toArray();
      res.send(result);

    })
    app.post('/coffiec',async (req,res)=>{
      const newCocolas = req.body;
      const result = await coffiec .insertOne(newCocolas);
      res.send(result);
    })
    const redBulls = client.db("foodliy").collection(" redbulls")
    app.get('/redbulls', async (req ,res)=>{

      const  cursor =  cocolas .find();
      const result = await cursor. toArray();
      res.send(result);

    })
    app.post('/redbulls',async (req,res)=>{
      const newCocolas = req.body;
      const result = await redBulls.insertOne(newCocolas);
      res.send(result);
    })
    const fantas = client.db("foodliy").collection(" fantas")
    app.get('/fantas', async (req ,res)=>{

      const  cursor =  cocolas .find();
      const result = await cursor. toArray();
      res.send(result);

    })
    app.post('/fantas',async (req,res)=>{
      const newCocolas = req.body;
      const result = await fantas.insertOne(newCocolas);
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