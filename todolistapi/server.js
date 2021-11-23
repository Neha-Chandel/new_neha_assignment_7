const express = require("express");
const app = express();
const port = 3000;
const db = require("./app/models");
const dbconfig = require("./app/config/db.config");


app.use(express.json());

app.get('/', (req, res) => {
  res.send('To Do List APIs!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

db.mongoose.connect(`mongodb://${dbconfig.HOST}:${dbconfig.PORT}/${dbconfig.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
    process.exit();    
})

require("./app/routes/todo.routes")(app);