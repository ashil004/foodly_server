const mangoDrinks = [
    {
        
        "photo" : 'https://i.ibb.co/87hbG1r/pexels-alleksana-4113682.jpg',
        "productName ":'cokocola ',
        "productType" : 'soft drink',
        "price" : 10,
        "description":"Quench your thirst with the tropical allure of our Mango Drink, a perfect balance of sweet and tangy notes in every refreshing gulp. Embrace the taste of sunshine in a glass and let your senses drift to a blissful beach getaway.",
        "Reting" :4.5,


    },
    
    
   
    
    
]
const lemonDrinks =[
    {
        
            
            "photo" : 'https://i.ibb.co/1QKcFnH/pexels-fox-764370.jpg',
            "productName ":'mrinda',
            "productType" : 'soft Drinks',
            "price" :15,
            "description":"Liven up your taste buds with the invigorating zest of our Lemon Soft Drink, a tangy symphony of citrus flavors that will leave you feeling refreshed and rejuvenated. It's the perfect companion for those seeking a sunny and effervescent twist in every sip.",
            "Reting" : 5.0,
    
    
        
    }
]
const waterMelon = [
    {
        
        "photo" : 'https://i.ibb.co/vLPGkzH/pexels-martin-p-chy-1292294.jpg',
        "productName ":'pepsi',
        "productType" : 'soft drink',
        "price" :55,
        "description":"Quench your thirst with the cool, hydrating essence of summer in a glass - our Watermelon Fruit Drink. Enjoy the sweet, juicy allure of freshly picked watermelon with every sip, a delightful way to beat the heat.",
        "Reting" : 5.0,


    }

]
const dragon = [
    {
        
        "photo" : 'https://i.ibb.co/18HJXyc/pexels-engin-akyurt-1437318.jpg',
        "productName ":'coffie',
        "productType" : 'coffice ',
        "price" :75,
        "description":"Sip on the exotic allure of our Dragon Fruit Drink, a vibrant blend of the tropics in every glass, bursting with refreshing, pink-hued splendor. Unleash the unique and sweet flavor of dragon fruit for a delightful, thirst-quenching experience like no other.",
        "Reting" : 3.0,


    },
]

const appleJusice =[
    {
        
        "photo" : 'https://i.ibb.co/fxMM7wW/pexels-sanket-sawale-17423287.jpg',
        "productName ":'red bull',
        "productType" : 'anarge drink',
        "price" :150,
        "description":"Savor the pure, crisp taste of nature's bounty with our Apple Juice, a refreshing and timeless classic that captures the essence of orchard-fresh apples in every sip.",
        "Reting" : 4.0,


    },
]
const orange = [
    {
        
        "photo" : 'https://i.ibb.co/sVwXgtV/pexels-emre-akyol-17559580.jpg',
        "productName ":'fanta',
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