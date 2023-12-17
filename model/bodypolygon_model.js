import mongoose from "mongoose";
const {Schema} = mongoose;
const bodyPolygonSchema = new Schema ({
    idp : Number,
    name : String,
    description : String,
    width : Number,
    height : Number,
    color : String,
    type : String,
    face : {type : Schema.Types.ObjectId, ref: 'face'},
}, {collection : 'bodypolygon'});
const bodypolygon = mongoose.model('bodypolygon', bodyPolygonSchema);
export default bodypolygon;