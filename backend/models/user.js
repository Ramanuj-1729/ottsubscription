const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    plan: { type: mongoose.Types.ObjectId, ref: 'plans' },
    status : { type: String},
    date : { type: Date},
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema, 'users');
