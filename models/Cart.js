const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const CartSchema = new Schema({

    title: {
        type: String    //attach a defalut message 
    },

    price:{
        type: Number,
 
    },
    quantity: {
        type: Number,
        default: 1
    }

});


const Cart = mongoose.model('cart', CartSchema);    

module.exports = Cart;