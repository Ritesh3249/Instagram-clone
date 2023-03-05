const mongoose = require('mongoose')
const {Schema} = mongoose;

const ProfileSchema = new Schema({
    name:{
        type: 'String',
        required: true
    },
   
    password:   String,
    follower:Number,
    following:Number,
    post:[{
        photo:String,
        comment:[{
            userName:String,
            comment:String
        }]
    }],
    date: {
        type: "Date",
        default: Date.now,
      },
}, { timestamps: true })

module.exports = mongoose.model('Profile',ProfileSchema)