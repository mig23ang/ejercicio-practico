const User = require("../models/User");

const usuarioCtrl = {};


usuarioCtrl.createUsuarios = async (req, res, next) => {
    const usuario = new User({
        name: req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
    });
    await usuario.save();
    res.json({ status: "Usuario creado" });
};

usuarioCtrl.getUsuarios = async (req, res, next) => {
    const { id } = req.params;
    const usuario = await User.findById(id);
    res.json(usuario);
};
usuarioCtrl.getUsuarios = async (req, res, next) => {

    const usuario = await User.find();
    res.json(usuario);
};

usuarioCtrl.editUsuarios = async (req, res, next) => {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "Usuario actualizado" });
};

usuarioCtrl.deleteUsuarios = async (req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: "usuario eliminado" });
};

module.exports = usuarioCtrl;