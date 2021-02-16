const express = require("express")
const app = express()


app.get("/", function(req, res){
	res.send("Seja bem vindo ao meu app!")
})

app.get("/sobre", function(req,res){
	res.send("Pagina Sobre")
})

app.get("/blog", function(req,res){
	res.send("Esta e a pagina do blog")
})


app.listen(8081, function(){
	console.log("server funcionando na url localhost:8081")
})