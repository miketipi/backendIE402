import mongoose from "mongoose"
const {Schema} = mongoose;
const faceSchema = new Schema({
    idf : Number,
    faceDescription : String,
    coordinates : {type:[Schema.Types.ObjectId], ref : "node"}
}, {collection: 'Face'})
const face = mongoose.model('face', faceSchema);
export default face;