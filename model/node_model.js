import mongoose from 'mongoose'
const {Schema} = mongoose;
const nodeSchema = new Schema({
    idn : String,
    x : Number,
    y : Number,
    z : Number
});
const node = mongoose.model('node', nodeSchema);
    
