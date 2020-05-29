const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


// create a project schema & model 
const ProductSchema = new Schema({

    title: {
        type: String,
        required: [true, 'title is required']        //attach a defalut message 
    },

    price:{
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: [true, 'type a description for your project'],       //attach a defalut message 
        max: 255     
    },

    availability: {
        type: String,
        default: 'Available'
    },

    file: { type: String},

    updated_at: { type: Date, default: Date.now },
});




const Product = mongoose.model('product', ProductSchema);     //mongoose will make a collection of project(s) and take Driver as a model to represent drivers collection in the db as DriverSchema.

module.exports = Product;