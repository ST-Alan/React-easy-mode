import express from "express"

const app = express();

//Vamos a agregar lo siguiente para que node pueda entender lo que el cliente envía:
app.use(express.json())

// Vamos a crear un arreglo que contenga las tareas
const todoListArray=[]


app.get("/", (request, response)=>{
    response.json({
        message:"Hola Mundo",
        total: todoListArray.length,
        task: todoListArray,
    });
})

app.post("/create-task",(request,response)=>{
    console.log(request.body)

    const task = request.body
    // request.body es la data que se envía al cliente (navegador)
    // task.text si se crea un campo text con el valor se usaría esta variable.text para mostrar dicho valor
    task.created_at = new Date()
    task.id = todoListArray.length + 1

    todoListArray.push(task)

    
    response.json({
        //message: "Task created"
        task,
    })

})

app.put("/update/:id", (req,res)=>{
    // el ":id" indica que es una variable que viene en el url no en el body, en este caso viene en un params
    // el :nombre indica que es dinámico. El nombre que tenga el :nombre debe ser igual al nombre después del params, ejemplo: params.nombre
    const id= req.params.id

    // Lo que el cliente envíe estará en el body:
    const data = req.body

    // Buscar la tarea
    const taskIndex = todoListArray.findIndex(todoTask => todoTask.id === Number(id))

    // Falta comparar la info actual con la info del body
    todoListArray[taskIndex] = {...todoListArray[taskIndex], ...data}

    return res.json({
        tarea:"updated task",
    })
})

app.listen(6001,()=>console.log("El servidor inició en el puerto http://localhost:6001")) 