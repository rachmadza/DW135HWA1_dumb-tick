import React, { Component } from 'react'
import { AppBar, Toolbar, Grid, Button } from '@material-ui/core'

import { Link } from 'react-router-dom'

import Logo from '../../img/logo.png'

import User from '../../components/dropDown/dropDown'


export default class Navbar extends Component {
  render() {
    let auth = localStorage.getItem('AUTH_TOKEN')
    let navbar
    const authCheck = (token) => {
      if (!token) {
        return navbar =
          <AppBar position="static" style={{ height: 80, backgroundColor: '#ff5252' }}>
            <Toolbar>
              <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={10}>
                  <Link to='/'>
                    <img src={Logo} alt="Dumb-Tick" style={{ width: '12%', height: '12%' }} />
                  </Link>
                </Grid>
                <Grid item xs={2}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to='/register' style={{ textDecoration: 'none' }}>
                      <Button variant="outlined" style={{ textTransform: 'none', color: 'white', borderColor: 'white' }}>
                        <i class="fas fa-user-plus" style={{ fontSize: 18, marginRight: 8 }}></i> Register
                      </Button>
                    </Link>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                      <Button variant="outlined" style={{ textTransform: 'none', color: 'white', borderColor: 'white' }}>
                        <i class="fas fa-sign-in-alt" style={{ fontSize: 18, marginRight: 8 }}></i> Login
                      </Button>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
      } else {
        return navbar =
          <AppBar position="static" style={{ height: 80, backgroundColor: '#ff5252' }}>
            <Toolbar>
              <Grid container style={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={11}>
                  <Link to='/'>
                    <img src={Logo} alt="Dumb-Tick" style={{ width: '12%', height: '12%' }} />
                  </Link>
                </Grid>
                <Grid item xs={1}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <User />
                  </div>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
      }
    }

    authCheck(auth)

    return (
      <div>
        {navbar}
      </div>
    )
  }
}
