import mongoose from 'mongoose';

let Item;

// Create a schema
const item = new mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now }
});

// Create a model based on the schema
Item = mongoose.model('item', item);

export default {
  Item,
}