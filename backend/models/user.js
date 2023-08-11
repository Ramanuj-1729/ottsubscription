import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    plan: { type: mongoose.Types.ObjectId, ref: 'plans' },
    status : { type: String},
    date : { type: Date},
}, { timestamps: true });

export default mongoose.model('User', userSchema, 'users');
