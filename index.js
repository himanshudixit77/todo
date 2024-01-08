const express = require('express')
const { createtodo, updateTodo } = require('./zod.js')
const { todoModel } = require('./db.js')



const app = express();
app.use(express.json())

app.post("/todo", async(req, res) => {
    
    const payload = req.body;
    const parsePayload = createtodo.safeParse(payload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg:"error in validation"
        })
        return;

    }
    await todoModel.create({
        title: payload.title,
        description: payload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
})

app.get("/alltodos", async(req, res) => {

    const alltodo =await todoModel.find();
    console.log(alltodo);
    res.json({
    alltodo
})
    
})

app.put("/completed", async(req, res) => {
    const payload = req.body;
    const parseload = updateTodo.safeParse(payload)
    if (!parseload.success) {
        res.status(411).json({
            msg:"error in validation"
        })
        return;

    }
    await todoModel.update({
        _id:req.body.id
    }, {
        completed:true
    })
  
    res.json({
        msg:"updte succesfully"
    })
})


app.listen(5001, () => {
    console.log('server has started')
})