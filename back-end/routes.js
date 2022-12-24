const express = require('express');
const route = express.Router();
const { showUsers } = require('./controllers/userController')
const { showOrders } = require('./controllers/ordersController')

route.get('/test', showUsers);
route.get('/orders', showOrders);

module.exports = route;