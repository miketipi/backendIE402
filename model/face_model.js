import mongoose from "mongoose"
const {Schema} = mongoose;
const faceSchema = new Schema({
    faceDescription : String,
    coordinates : {type:[Schema.Types.ObjectId], ref : "node"}
}, {collection: 'face'})
const face = mongoose.model('face', faceSchema);
export default face;