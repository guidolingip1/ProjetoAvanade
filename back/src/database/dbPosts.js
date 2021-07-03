import mongoose from 'mongoose';

const postsSchema = mongoose.Schema({
  author: String,
  title: String,
  body: String,
  likes: Number,
  dislikes: Number,
  favorite: Number,
});

export default mongoose.model('posts', postsSchema);