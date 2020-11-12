const express = require('express');
const router = express.Router();


const usuario = require("../controllers/usuarios.controller");

router.get('/', usuario.getUsuarios);

router.post("/", usuario.createUsuarios);

router.get("/:id", usuario.getUsuarios);

router.put("/:id", usuario.editUsuarios);

router.delete("/:id", usuario.deleteUsuarios);

module.exports = router