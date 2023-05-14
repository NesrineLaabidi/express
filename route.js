var express=require("express")
var route=express.Router()
var path = require("path");
route.get("/",function (req,res) {
    res.sendFile(path.resolve("./WebApp/home.html"))
})
route.get("/Contact-us",function (req,res) {
    res.sendFile(path.resolve("./WebApp/contact.html"))
})
route.get("/Our-Services",function(req,res){
    res.sendFile(path.resolve("./WebApp/services.html"))
})
module.exports=route
