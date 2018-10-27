const express = require("express");
config=require("./server/configure");
let app = express();
app.set("port",process.env.PORT||3300);
app.set("Views",`${__dirname}/views`);
app=config(app);
app.get("/",(req,res)=>{
	res.send("你好，世界！！！");
});
app.listen(app.get("port"),()=>{
	console.log(`Server up:http://localhost:${app.get("port")}`);
});