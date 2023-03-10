const mongoose = require("mongoose")

const {Schema} = mongoose;
const User = new Schema({
    name:{
        type:'String',
        required:true
    },
    email:{type:String,required:true},
    phone:{type:String,required:true},
    password:{type:String,required:true},
    isActive:{type:Boolean,default:true},
    date:{
        type:"Date",
        default:Date.now,
    }
}, { timestamps: true })

module.exports = mongoose.model("User",User)