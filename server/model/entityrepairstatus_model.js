import mongoose from "mongoose";
const {Schema} = mongoose;
const entityRepairStatusSchema = new Schema ({
    StartDate : {
        type : Date,
        required : true
    },
    FinishDate : {
        type : Date,
        required : true
    },
    Type : {
        type : String,
        required : true
    },
    RepairReason : {
        type : String,
        required : true
    },
    bodypolygon: {type : Schema.Types.ObjectId, ref: 'bodypolygon'},
    user: {type : Schema.Types.ObjectId, ref: 'User'},
}, {collection : 'entityrepairstatus'});
const entityRepairStatus = mongoose.model('entityrepairstatus', entityRepairStatusSchema);
export default entityRepairStatus;