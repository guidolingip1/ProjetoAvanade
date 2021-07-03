import mongoose from 'mongoose';

const usersSchema = mongoose.Schema({
  name: String
});

export default mongoose.model('user', usersSchema);