var mongoose = require('mongoose');
var SampleSchema = new mongoose.Schema({
  _id: Number,
  value: Number,
},
{
    collection: 'art_year_counts'
});
mongoose.model('Sample', SampleSchema);