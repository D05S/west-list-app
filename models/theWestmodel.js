import { Schema, model, models } from 'mongoose';

const westSchema = new Schema({
  title: String,
  url: String
});

const theWest = models.theWest || model('theWest', westSchema);

export default theWest;