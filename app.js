const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing =require("./models/listing.js");
const path=require("path");


const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("connect to DB");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send("hi ,i am prachi soni");
})
app.listen(8080,()=>{
  console.log("running");
})

//new route
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})

//show route
app.get("/listings/:id",async (req,res)=>{
    let {id}=req.params;
   const listing=await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
})

app.get("/listings",async(req,res)=>{
   const allListings = await Listing.find({});
     res.render("listings/index.ejs",{allListings});
    })
 
    app.post("/listings",async(req,res)=>{
        // let {title,description,image,price,country,location}=req.body;
        // Listing.update();
        const newlisting= new Listing(req.body.listing);
        await newlisting.save();
        console.log(newlisting);
        res.redirect("/listings");
    })

// app.get("/testlisting",async(req,res)=>{
//    let sampleListing =new Listing({
//     title:"My New Villa",
//     description:"By the beach",
//     price:1200,
//     location:"Calangute,Goa",
//     country:"India",
//    })
//    await sampleListing.save();
//   console.log("sample  was saved");
//   res.send("successful");
// })