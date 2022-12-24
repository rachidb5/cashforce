const { Orders } = require('../models');

exports.showOrders = async (req, res) => {
    console.log(Orders)
    try { 
    const order = await Orders.findAll();
    return res.status(200).json(order);
} catch (e) {
        console.log(e.message);
        return res.status(400).json({ error: e });
      }
  };