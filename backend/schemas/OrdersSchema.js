const {Schema} = require("mongoose");
const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: String,
    mode: String,
});

module.exports ={OrdersSchema};