// const app = require("./app")
const express = require('express');

const { register, logIn, getUsers, getOrders, addOrder, getOrder, updateOrder, deleteOrder } = require("./controller")

const middleware = require("./middlewares")
const authRouter = express.Router()
authRouter.get('/', (req, res) => {
    res.json("hallo world")
})
authRouter.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        res.json(await register(req.body))
        console.log(2);
    } catch (err) {
        throw err
    }
})
authRouter.get("/protect",await (logIn(req.body)), middleware, (req, res) => {
    try {
        res.json("res from jwt")
    } catch (error) {
        throw error
    }
})
authRouter.get('/login', async (req, res) => {
    try {
        console.log(req.body);
        res.json(await logIn(req.body))
        console.log(2);
    } catch (err) {
        throw err
    }
})
authRouter.get('/users', async (req, res) => {
    res.json(await getUsers())

})
authRouter.get('/orders', async (req, res) => {
    res.json(await getOrders(req.body))
})
authRouter.get('/orders/add', async (req, res) => {
    const b = req.body
    res.json(await addOrder(req.body.category, req.body.orderName, req.body.color, b.price, b.id))
})
authRouter.get('/orders/find', async (req, res) => {
    res.json(await getOrder(req.body))

})
authRouter.get('/orders/update', async (req, res) => {
    res.json(await updateOrder(req.body))
})
authRouter.get('/orders/delete', async (req, res) => {
    res.json(await deleteOrder(req.body))
})

console.log(12222342423);
module.exports = authRouter

//jwt
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXI0QGdtYWlsLmNvbSIsInBlcm1pc3Npb25zIjpbInIiLCJ3Il0sImlhdCI6MTYwMjg2MDk1OSwiZXhwIjoxNjM4ODYwOTU5fQ.ZMv2iP7K3c8vbb8Q7Lnfeffuj5RR2cN0tdMihV9Xb8c


// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXI0QGdtYWlsLmNvbSIsInBlcm1pc3Npb25zIjpbInIiLCJ3Il0sImlhdCI6MTYwMjg1NzQ5MiwiZXhwIjoxNjM4ODU3NDkyfQ.Lnwq5tB2DAXiNZElNPWZTzQzE5AFye6oZS5dbT0QwRY"