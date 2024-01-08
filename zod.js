const zod = require('zod')

const createtodo = zod.object({
    title: zod.string(),
    description:zod.string()
})

const updateTodo = zod.object({
    id:zod.string()
})

module.exports = {
    createtodo ,updateTodo
}