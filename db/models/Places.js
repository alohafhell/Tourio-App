import mongoose from "mongoose";

const { Schema } = mongoose;

const placesSchema = new Schema({
  name: { type: String, require: true },
  location: { type: String, require: true },
  image: { type: String, require: true },
  mapURL: { type: String, require: true },
  description: { type: String, require: true },
});

const Places = mongoose.models.Places || mongoose.model("Places", placesSchema);

export default Places;
