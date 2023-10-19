const express = require('express');
const app = express();
const cors = require('cors');
const port =process.env.PORT || 5000;

const { MongoClient, ServerApiVersion } = require('mongodb');

// middleware
 
app.use(cors());
app.use(express.json());





const uri = "mongodb+srv://pramanikashik007:g7IlEl0WZyg4lW97@cluster0.yqcs9gt.mongodb.net/?retryWrites=true&w=majority";

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



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


const mangoDrinks = [
    {
        "id" :1,
        "photo" : 'https://i.ibb.co/F3Bdp2P/pexels-roman-odintsov-4955257.jpg',
        "productName ":'Mango Drinks',
        "productType" : 'Fruits Drinks',
        "price" : 10,
        "description":"Quench your thirst with the tropical allure of our Mango Drink, a perfect balance of sweet and tangy notes in every refreshing gulp. Embrace the taste of sunshine in a glass and let your senses drift to a blissful beach getaway.",
        "Reting" :4.5,


    },
    
    
   
    
    
]
const lemonDrinks =[
    {
        
            
            "photo" : 'https://i.ibb.co/54zC8Bd/pexels-designbyja-2109099.jpg',
            "productName ":'lemon Drinks',
            "productType" : 'soft Drinks',
            "price" :15,
            "description":"Liven up your taste buds with the invigorating zest of our Lemon Soft Drink, a tangy symphony of citrus flavors that will leave you feeling refreshed and rejuvenated. It's the perfect companion for those seeking a sunny and effervescent twist in every sip.",
            "Reting" : 5.0,
    
    
        
    }
]
const waterMelon = [
    {
        
        "photo" : 'https://i.ibb.co/B2dSLkW/pexels-rdne-stock-project-8456301.jpg',
        "productName ":'Water Melon Drinks',
        "productType" : 'Fruits Drinks',
        "price" :55,
        "description":"Quench your thirst with the cool, hydrating essence of summer in a glass - our Watermelon Fruit Drink. Enjoy the sweet, juicy allure of freshly picked watermelon with every sip, a delightful way to beat the heat.",
        "Reting" : 5.0,


    }

]
const dragon = [
    {
        
        "photo" : 'https://i.ibb.co/mF7BnHh/pexels-lisa-fotios-109275.jpg',
        "productName ":'Dragon Fruits juice',
        "productType" : 'Fruits juice',
        "price" :75,
        "description":"Sip on the exotic allure of our Dragon Fruit Drink, a vibrant blend of the tropics in every glass, bursting with refreshing, pink-hued splendor. Unleash the unique and sweet flavor of dragon fruit for a delightful, thirst-quenching experience like no other.",
        "Reting" : 3.0,


    },
]

const appleJusice =[
    {
        
        "photo" : 'https://i.ibb.co/7t8xcmG/pexels-roman-odintsov-4551975.jpg',
        "productName ":'Apple Juice',
        "productType" : 'Fruits Juice',
        "price" :150,
        "description":"Savor the pure, crisp taste of nature's bounty with our Apple Juice, a refreshing and timeless classic that captures the essence of orchard-fresh apples in every sip.",
        "Reting" : 4.0,


    },
]
const orange = [
    {
        
        "photo" : 'https://i.ibb.co/wsg6c18/pexels-pixabay-158053.jpg',
        "productName ":'Orange juice',
        "productType" : 'juice',
        "price" :35,
        "description":"Start your day with a burst of sunshine in a glass, our Orange Juice - a zesty, vitamin-packed elixir that awakens your taste buds and energizes your mornings. Experience the natural tang and invigorating citrusy goodness of freshly squeezed oranges with every refreshing sip.",
        "Reting" : 6.0,


    }

]



app.get('/mango',(req,res)=>{
    res.send(mangoDrinks);
});
app.get('/lemon',(req,res)=>{
    res.send(lemonDrinks);
});
app.get('/watermelon',(req,res)=>{
    res.send(waterMelon);
});
app.get('/dragon',(req,res)=>{
    res.send(dragon);
});
app.get('/apple',(req,res)=>{
    res.send(appleJusice);
});
app.get('/orange',(req,res)=>{
    res.send(orange);
});

app.get('/',(req ,res)=>{
    res.send('hello bangladesh');
});

app.listen(port,()=>{
   console.log(`Server is running on ${port}`); 
})