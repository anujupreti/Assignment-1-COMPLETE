var mongoose = require('mongoose');
var SampleSchema = new mongoose.Schema({
  ARTIST: String,
  TITLE: String,
  YEAR: Number,
},
{
    collection: 'art'
});
mongoose.model('art_collection', SampleSchema);

/*
{
    "ARTIST":"Pridgeon, James",
    "TITLE":"As Time Goes By",
    "YEAR":2000
  },
  
*/