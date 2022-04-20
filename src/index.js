const express = require("express");
const app = express();
//settings

app.set("port", process.env.PORT || 3000);
//middlewares
app.use(express.json());

//Routes

app.get("/api/", (req, res) => {
	res.send("Hola mundo");
});

app.use("/api/users", require("./routes/users"));

app.listen(app.get("port"), () => {
	console.log("server on port" + app.get("port"));
});
