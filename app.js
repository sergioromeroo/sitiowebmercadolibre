const express = require("express");
const app = express();
const port = 3030
const path = require("path");        //en html comentar es shift + alt + a
app.use(express.static("public")); //para imagen url


app.get("/", (req,res) => res.sendFile(path.join(__dirname,"views","home.html")));

app.listen(port, () => console.log("servidor corriendo en el puerto" + port));