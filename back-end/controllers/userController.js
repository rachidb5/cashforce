const { Users, Providers } = require("../models");

exports.showUsers = async (req, res) => {
  console.log(Users);
  try {
    const user = await Users.findAll();
    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    return res.status(400).json({ error: e });
  }
};

exports.showProviders = async (req, res) => {
    try {
      const Usuario = await Providers.findAll();
      return res.status(200).json(Usuario);
    } catch (e) {
          return res.status(400).json({ error: e });
      }
  };
  exports.showProviderById = async (req, res) => {
    try {
      const Usuario = await Providers.findByPk(req.params.id);
      if (Usuario === null) {
        return res.status(404).json({ message: 'User does not exist' });
      }
      return res.status(200).json(Usuario);
    } catch (e) {
          return res.status(400).json({ error: e });
      }
  };