const bcrypt = require('bcrypt') // for hashing
const dotenv = require('dotenv')// for hide  in .env file
const express = require('express');
const jwt = require('jsonwebtoken');
const { orders, users, roles } = require('./models');
require('dotenv').config()


const register = async (user) => {
  // console.log(user);
  if (!user.email.includes("@")||!user.email.includes(".com")) {
    return  "Please enter your email currect"
  }
  const newUser = users.filter((u) => {
    return u.email === user.email
  })
  if (newUser.length === 0) {
    const addUser = user
    addUser.ID = 2;
    addUser.password = await bcrypt.hash(user.password, Number(process.env.SALT))
    if (user.birthDay==="") {
      return "Please enter your birthday"
    }
    if (user.userName.length<4||user.userName.includes("#")) {
      return "Please enter your user name currect"

    }
    users.push(addUser)
    // console.log("added", users)
    return `welcome to our website MR.${user.userName.toUpperCase()}`
  } else {
    return "user is here in data base"

    // console.log('salt ', Number(process.env.SALT));
  }
}
// console.log(users);

const logIn = async (user) => {
  const newUser = users.filter((u) => {
    return u.email === user.email
  }) 
  console.log(123);
  const addedUser = user

  // addedUser.password = await bcrypt.hash(addedUser.password, Number(process.env.SALT))
  // console.log("hashed",addedUser.password );
  if (newUser.length === 0) {
    return "password or email is incorrect"
  } else {

    console.log("passsssssssssed", await bcrypt.compare(user.password, newUser[0].password))
    if (await bcrypt.compare(user.password, newUser[0].password)) {
      const permission = roles.filter((p) => {
        return p.id === newUser[0].role_id
      })
      console.log(newUser[0].email)
      const payload = {
        email: newUser[0].email,
        permissions: permission[0].permissions
      }
      const options = {
        expiresIn: process.env.TOKEN_EXPIRATION
      }
      
      // console.log(jwt.sign(payload, process.env.SECRET, options));
      
      
      
      return jwt.sign(payload, process.env.SECRET, options)
    
    } else {
      return "password is incorrect"
    }
  }
}


// console.log( jwt.sign(payload, process.env.SECRET, options));

const getUsers = async (user) => {
  console.log(1);
  return users

}
const getUser = async (user) => {
  console.log(1);
  return users

}
var m = 6
const addOrder = async (oCategory, oName, oColor,oPrice,oId) => {
  const newOrder ={}
  newOrder.Name = oName
  newOrder.Color = oColor
  newOrder.Id= m++
  newOrder.Id=newOrder.Id.toString()
  newOrder.Price=oPrice

  orders.push(newOrder)
  return orders

}
const getOrders = async (order) => {
  console.log(1);
  return orders

}
const getOrder = async (order) => {
  const ord =order
  const myOrder =  orders.filter((o)=>{
    return  o.id===order.id
  })
  if (myOrder.length===0) {
    return"wrong id given"
  }
  console.log("my",myOrder);
  return myOrder

}
const updateOrder=async(order)=>{
  const ord =order
  let myOrder =  orders.filter((o)=>{
    return  o.id===order.id
  })
  if (myOrder.length===0) {
    return"wrong id given"
  }
  console.log("my1",myOrder);
  myOrder[0].name=order.eName
  myOrder[0].color=order.eColor
  myOrder[0].price=order.ePrice

  console.log("my2",myOrder);
  return myOrder
}
const deleteOrder=async(order)=>{
  // const ord =order
  // let myOrder =  orders.filter((o)=>{
  //   return  o.id===order.id
  // })
  // if (myOrder.length===0) {
  //   return"wrong id given"
  // }
   for (let index = 0; index < orders.length; index++) {
    if (orders[index].id===order.id) {
      orders.splice(index,1)
      index--
      return orders}
    
    
  }
  return orders
}

module.exports = {
  register,
  logIn,
  getUsers,
  getOrders,
  addOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  

}