const express = require('express');
const route = express.Router();
const { showUsers } = require('./controllers/userController')
const { showOrders, showBuyers } = require('./controllers/ordersController')

route.get('/test', showUsers);
route.get('/orders', showOrders);
route.get('/buyers', showBuyers);

module.exports = route;