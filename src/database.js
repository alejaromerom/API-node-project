const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "back",
	password: "12345",
	database: "pruebas",
});

connection.connect((err) => {
	if (err) {
		console.log("Error conectando a la base de datos\n", err);
		return;
	}
	console.log("conexiòn a la base de datos establecida");
});

module.exports = connection;
