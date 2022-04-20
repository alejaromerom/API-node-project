const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const connection = require("../database");
//solicitar el recurso
router.get("/", (req, res) => {
	//seleccionar si existe un error desde el campo usuarios los campos y filas
	//la respuesta envia el error si no se obtienen los usuarios
	connection.query("SELECT * FROM users", (err, rows, fields) => {
		if (err) {
			res.status(500).send({
				message: "Error al obtener los usuarios" + err,
			});
		} else {
			res.json(rows);
		}
	});
});
//la respuesta envia el error si no se ha creado el usuario y si si se ha creado
//
// manejo de errpres
router.get("/:id", (req, res) => {
	const { id } = req.params;
	connection.query(
		"SELECT FROM users WHERE id =?",

		[id],
		(err, rows, fields) => {
			if (err) {
				res.status(500).send({
					mesasge: "Error al obtener la informaciòn" + err,
				});
			} else {
				res.json({
					mesagge: "usuario creado con exito",
				});
			}
		}
	);
});

router.post("/", (req, res) => {
	const { id, nombre, edad } = req.body;
	console.log(req.body.id);
	console.log(req.body.nombre);
	console.log(req.body.edad);
	connection.query(
		"INSERT INTO users SET (?)"[req.body],
		(err, rows, fields) => {
			if (err) {
				res.status(500).send({
					message: "Error al crear el usuario " + err,
				});
			} else {
				res.json({
					message: "Usuario creado con éxito",
				});
			}
		}
	);
});

//responde a la solicitud en la ruta de /id
//Actualizaciòn del usuario
//envia la respuesta si se actualiza o no el usuario
router.put("/:id", (req, res) => {
	const { nombre, edad } = req.body;
	const query = "UPDATE users SET ? WHERE id_usuario = ?";
	connection.query(query, [id_usuario, nombre, edad], (err, rows, fields) => {
		if (err) {
			res.status(500).send({
				message: "Error al actualizar el usuario" + err,
			});
		} else {
			res.json({
				message: "Usuario actualizado con éxito",
			});
		}
	});
});
//responde a la solicitud en la ruta de /id
//Se elina el usuario

router.delete("/:id", (req, res) => {
	const { id } = req.params;
	const query = "DELETE FROM users WHERE id = ?";
	connection.query(query, [id_usario], (err, rows, fields) => {
		if (err) {
			res.status(500).send({
				message: "Error al eliminar el usuario" + err,
			});
		} else {
			res.json({
				message: "Usuario eliminado con éxito",
			});
		}
	});
});

module.exports = router;
