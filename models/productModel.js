const mongoose=require('mongoose');
const productSchema= new mongoose.Schema({
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    name:{
        type:String,
        required: true,
        unique:[true,'name should not be repeat'],
        trim:true,
        maxlength:[8,'name should not more than 8 character']
    },
    price:{
        type:Number,
        required: true
    },
    company:{
        type:String,
        //enum:["airtel","vodaphone","usha","ika"
        enum:{
            values:["airtel","vodaphone","usha","ika"],
            message:'{VALUE} is not supported'
        }
    }
})


module.exports=mongoose.model("productAPI",productSchema);