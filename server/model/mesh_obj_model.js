import mongoose from "mongoose";
const {Schema} = mongoose;
const meshobj = new Schema({
    name : String,
    description : String,
    height : Number,
    size : Number,
    scroll : Number,
    node_loc : {type:Schema.Types.ObjectId, ref : "node"}
},{collection : 'meshobj'});
const meshobject = mongoose.model('meshobject', meshobj);
export default meshobject;
