import React, { Component } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import OrdersList from './components/OrdersList';
import CustomersList from './components/CustomersList';
import NewOrder from './components/NewItem';
import Register from './components/Register';
import About from './components/About';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ permission: "w,r,u,d", userName: "malek", email: "malek@how.com", password: "1234" },
      { permission: "w,r", userName: "malek2", email: "malek@how.com", password: "1234" }
      ],
      orders: [],
      login: true
    }

    console.log('constructor', 1);
  }
  getOrders = () => {
    axios.get("http://localhost:5000/orders").then((res) => {
      // console.log("res:", res.data)
      this.setState({ orders: res.data })
    })
      .catch((err) => {
        console.log(err)
      })
  }
  addOrder = (nN, nP, nNum, nC) => {
    const newOrder = {
      category: "pants",
      itemName: nN,
      color: nC,
      price: nP,
      quantity: nNum,
    }
    console.log("newOrder:",newOrder  )
    axios.get("http://localhost:5000/orders/add", newOrder).then((res) => {
      console.log("res:", res.data)
      const Arr = [...this.state.orders]
      Arr.push(newOrder)
      this.setState({ orders: Arr})
      // this.getOrders()
    })
      .catch((err) => {
        console.log(err)
      })
  }
  deleteOrder = () => {
    const deletebyId = { dId: 1 }
    axios.delete("http://localhost:5000/orders/delete",deletebyId).then((res) => {
      console.log("res:", res.data)
      // this.getOrders()
      // this.setState({ orders: res.data })
    })
      .catch((err) => {
        console.log(err)
      })
  }
  updateOrder = () => {
    // axios.put("http://localhost:5000/orders/update").then((res) => {
    //   console.log("res:", res.data)
    //   this.setState({ orders: res.data })
    // })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }
  // componentDidMount() {
  //   console.log('componentDidMount', 3);
  //   this.getAllTasks();
  login = () => {
    this.setState({ login: true })
  }
  logout = () => {
    this.setState({ login: false })
  }
  // }

  render() {
    const { login, logout, getOrders, addOrder, updateOrder, deleteOrder } = this
    console.log("hallo world")
    return (
      <Router>
        <div className="app" >

          <Route path="/" >
            <Home />
            <ul>
              <li><Link to="/order" >OrdersList</Link></li>
              <li><Link to="/customer" > CustomersList </Link></li>
              <li><Link to="/login"> login </Link></li>
              <li><Link to="/about" >about</Link></li>
            </ul>
          </Route>
          <Route exact path="/login" >
            <input type="search" placeholder="type your email" />
            <input type="password" placeholder="type your password" />
            <button onClick={login} >Login</button>
            <button onClick={logout}> logout</button>
            <Link to="/register" >register. . . </Link>
          </Route>
          <Route exact path="/register" render={(props) => <Register {...this.props} />} />
          <Route exact path="/about" render={() => <About {...this.props} />} />
        
          <Route path="/order" >
            {this.state.login ? (<div> <NewOrder add={addOrder} />
              <button onClick={getOrders} >getOrders</button>
              <button onClick={deleteOrder} >deleteOrder</button>
              <button onClick={updateOrder} >updateOrder</button>
              <OrdersList exact orders={this.state.orders} />
        
               </div>)
              : (<Link to="/login" > login first to
            see the orders  </Link>)}

          </Route>
          <Route exact path="/customer"  >
            <CustomersList users={this.state.users} />
          </Route>
        </div>
      </Router>
    )
  }
}



