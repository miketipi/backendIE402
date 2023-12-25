import { Schema, model } from 'mongoose';

const damageReportSchema = new Schema({
    Date: {
        type: Date,
        required: true,
    },
    Content: {
        type: String,
        required: true,
    },
    Cause: {
        type: String,
        required: true,
    },
    IDAccount: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    IDBodyPolygon: {
        type: Schema.Types.ObjectId,
        ref: 'bodypolygon',
    },
}, {collection : 'damagereport'});

export default model('DamageReport', damageReportSchema);
