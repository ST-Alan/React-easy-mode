import express from "express"

const app = express();

// Vamos a crear un arreglo que contenga las tareas
const todoListArray=[]


app.get("/", (request, response)=>{
    response.json({
        message:"Hola Mundos",
        total: todoListArray.length,
        task: todoListArray,
    });
})

app.post("/create-task",(request,response)=>{
    console.log(request)
})

app.listen(6001,()=>console.log("El servidor inició en el puerto http://localhost:6001"))