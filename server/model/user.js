import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, },
    admin: { type: Boolean, default: false, required: false }
});

const User = mongoose.model('User', userSchema);

export default User;