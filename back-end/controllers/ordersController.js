const { Orders, Users, Cnpjs, Providers, Buyers } = require('../models');

exports.showOrders = async (req, res) => {
    try { 
    const order = await Orders.findAll({
        include: [
        { model: Users, as: 'users' },
        { model: Cnpjs, as: 'cnpjs' },
        { model: Providers, as: 'providers' },
        { model: Buyers, as: 'buyers' },
        ],
      });
    return res.status(200).json(order);
} catch (e) {
        console.log(e.message);
        return res.status(400).json({ error: e });
      }
  };

exports.showBuyers = async (req, res) => {
    try { 
    const order = await Buyers.findAll();
    return res.status(200).json(order);
} catch (e) {
        console.log(e.message);
        return res.status(400).json({ error: e });
      }
  };