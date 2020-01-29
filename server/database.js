const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

const ReviewSchema = mongoose.Schema({
  content: String,
  rating: Number,
  created: Date,
  modified: Date,
  user: String,
  avatar: String,
  response: {
    content: String,
    created: Date,
    modified: Date,
    user: String,
    avatar: String
  }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = {
  mongoose,
  ReviewSchema,
  Review
};