const express = require("express");
const mc = require("./controllers/messages_controller")
const app = express();
app.use(express.json()); 
app.use(express.static(__dirname + '/../public/build'));
const port = 3001;
// const {create, read, update, delete} = require("./controllers/messages_controller")

const msgBaseUrl = "/api/messages";


app.post(msgBaseUrl, mc.create);
app.get(msgBaseUrl, mc.read);
app.put(`${msgBaseUrl}/:id`, mc.update);
app.delete(`${msgBaseUrl}/:id`, mc.delete);

app.listen(port, ()=>console.log(`Listening on ${port}`));