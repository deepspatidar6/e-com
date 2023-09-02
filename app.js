const express = require('express');
const app  = express();

app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})



app.listen(8080, ()=>{
    console.log(`Server Runing On This Port Number`) 
});


