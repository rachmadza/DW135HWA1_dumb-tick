import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/home/home'
import Category from './pages/categoryDetail/categoryDetail'
import Event from './pages/eventDetail/eventDetail'
import Profile from './pages/profile/profile'
import EditProfile from './pages/profile/editProfile'
import Payment from './pages/ticket/Payment'
import PaymentList from './pages/ticket/Cart'
import MyTicket from './pages/ticket/MyTicket'
import Register from './pages/user/register/register'
import Login from './pages/user/login/login'
import Add from './pages/addEvent/addEvent'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
              <Route path="/add">
                <Add/>
              </Route>
              <Route path="/myTicket">
                <MyTicket/>
              </Route>
              <Route path="/payments">
                <PaymentList/>
              </Route>
              <Route path="/payment/:id">
                <Payment/>
              </Route>
              <Route path="/profile/edit">
                <EditProfile />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/event/:id">
                <Event />
              </Route>
              <Route path="/category/:id">
                <Category />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

