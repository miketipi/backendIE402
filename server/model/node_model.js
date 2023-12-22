import mongoose from 'mongoose'
const {Schema} = mongoose;
const nodeSchema = new Schema({
    x : Number,
    y : Number,
    z : Number
}, {collection: 'node'});
const node = mongoose.model('node', nodeSchema);
export default node;
    
