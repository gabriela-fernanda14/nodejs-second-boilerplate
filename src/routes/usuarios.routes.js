import { Router } from "express";

import UsersRepository from "../models/users/UsersRepository.js";

const usuariosRoutes = Router();

const usersRepository = new UsersRepository();

let usuarios = [];

usuariosRoutes.get ("/", (req, res) => {
    const usarios = usersRepository.getAllUsers();


    return res.status(200).json({
        message:
        usuarios.length == 0
        ? "Não ha usuarios cadastrados"
        : `total de usuarios: $ {usuarios.legth}`,
        usuarios
    });
});
usuariosRoutes.post("/", (req, res) => {
    const { name, email, password } = req.body;

    const usuario = usersRepository.addUser(name, email, password);

    return res.status(201).json({
        message: "Usuario cadastrado com sucesso",
        usuario
    });
});


export default usuariosRoutes;