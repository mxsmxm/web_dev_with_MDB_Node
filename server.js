const express = require("express");
config=require("./server/configure");
let app = express();
app.set("port",process.env.PORT||3300);
app=config(app);

app.listen(app.get("port"),()=>{
	console.log(`Server up:http://localhost:${app.get("port")}`);
});
