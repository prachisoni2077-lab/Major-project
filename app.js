const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing =require("./models/Listing.js")

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

app.get("/",(req,res)=>{
    res.send("hi ,i am prachi soni");
})
app.listen(8080,(req,res)=>{
  console.log("running");
})

app.get("/testlisting",async(req,res)=>{
   let sampleListing =new Listing({
    title:"My New Villa",
    description:"By the beach",
    price:1200,
    location:"Calangute,Goa",
    country:"India",
   })
   await sampleListing.save();
  console.log("sample  was saved");
  res.send("successful");
})