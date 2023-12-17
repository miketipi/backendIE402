import mongoose from 'mongoose'
const {Schema} = mongoose;
const nodeSchema = new Schema({
    idn : String,
    x : Number,
    y : Number,
    z : Number
}, {collection: 'node'});
const node = mongoose.model('node', nodeSchema);
export default node;
    
