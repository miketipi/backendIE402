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
        ref: 'Account', // Thay 'User' bằng tên của collection user trong MongoDB
    },
    IDMaterial: {
        type: Schema.Types.ObjectId,
        ref: 'BodyPolygon', // Thay 'Material' bằng tên của collection Material trong MongoDB
    },
});

export default model('DamageReport', damageReportSchema);
