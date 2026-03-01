const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUhKRLGwTNsnrejbf0xhvsf86M-Ekq_AfIs6gHcJzDRu7vh6F",
    set: (v) =>
      v === ""
        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUhKRLGwTNsnrejbf0xhvsf86M-Ekq_AfIs6gHcJzDRu7vh6F"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

// ✅ YAHI MAIN FIX HAI
const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;