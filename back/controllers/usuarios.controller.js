const Usuario = require("../models/User");

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res, next) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioCtrl.createUsuarios = async (req, res, next) => {
    const usuario = new Usuario({
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
    const usuario = await Usuario.findById(id);
    res.json(usuario);
};

usuarioCtrl.editUsuarios = async (req, res, next) => {
    const { id } = req.params;
    await Usuario.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    res.json({ status: "Usuario actualizado" });
};

usuarioCtrl.deleteUsuarios = async (req, res, next) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({ status: "usuario eliminado" });
};

module.exports = usuarioCtrl;
