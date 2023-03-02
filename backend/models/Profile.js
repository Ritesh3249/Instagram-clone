const mongoose = require('mongoose')
const {Schema} = mongoose;

const AdminSchema = new Schema({
    name:{
        type: 'String',
        required: true
    },
    email: { type: String, required: true },
    phone: { type: String, required: true }  ,
    password:   String,
    follower:Number,
    following:Number,
    post:[String],
    date: {
        type: "Date",
        default: Date.now,
      },
})

module.exports = mongoose.model('Profile',AdminSchema)