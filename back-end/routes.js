const express = require('express');
const route = express.Router();
const { showUsers, showProviderById, showProviders } = require('./controllers/userController')
const { showOrders, showBuyers } = require('./controllers/ordersController')

route.get('/test', showUsers);
route.get('/orders', showOrders);
route.get('/buyers', showBuyers);
route.get('/providers', showProviders);
route.get('/provider/:id', showProviderById);

module.exports = route;