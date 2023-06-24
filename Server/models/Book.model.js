const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
        title:String,
        author:String,
        summary:String,
        image:String,
        price:String,
},{
        timestamps:true
}
)

const  BookModel = mongoose.model(("book") ,BookSchema )

 module.exports={
    BookModel
 }