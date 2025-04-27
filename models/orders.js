const mongoose = require('mongoose');
const Article = require('./articles');

const orderSchema = mongoose.Schema({
	total: Number,
	shippingFees: Number,
	purchaseDate: Date,
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
	isPaid: Boolean,
	articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'articles' }],
});

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;
