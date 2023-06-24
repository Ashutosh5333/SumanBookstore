const mongoose = require("mongoose")

const UserBookedSchema = mongoose.Schema({
        title:String,
        author:String,
        summary:String,
        image:String,
        price:String,
        userId:String,
        bookedby:{type:mongoose.Types.ObjectId,ref:"user",required:true}
},{
        timestamps:true
}
)

const  UserBookedModel = mongoose.model(("userbooked") ,UserBookedSchema )

 module.exports={
    UserBookedModel
 }