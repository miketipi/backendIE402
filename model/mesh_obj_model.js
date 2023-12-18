import mongoose from "mongoose";
const {Schema} = mongoose.Schema;
const meshobj = new Schema({
    name : String,
    description : String,
    height : Number,
    size : Number,
    scroll : Number,
    node : {type:[Schema.Types.ObjectId], ref : "node"}
},{collection : 'meshobject'});
const meshobject = mongoose.model('meshobject', meshobj);
export default meshobject;
