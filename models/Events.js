const mongoose=require('mongoose');
// const { date } = require('@hapi/joi');

const EventSchema=mongoose.Schema({
    eventName:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    pointsValue:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    speakers:{
        type:String,
        required:false,
    }
    // For PDFS
    // coverPDF:{
    //     type:Buffer,
    //     required:false
    // },
    // coverPDFType:{
    //     type:String, // type will be applicationPDF, can also be images
    //     required:false
    // }

});

// Time would be nice to have
// Location
// Sponsers

module.exports=mongoose.model("Events", EventSchema);