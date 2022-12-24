const { Users } = require('../models');

exports.showUsers = async (req, res) => {
    console.log(Users)
    try { 
    const user = await Users.findAll();
    return res.status(200).json(user);
} catch (e) {
        console.log(e.message);
        return res.status(400).json({ error: e });
      }
  };