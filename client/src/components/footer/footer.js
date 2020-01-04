import React, { Component } from 'react'
import { AppBar, Box, Grid, Container } from '@material-ui/core'

import Logo from '../../img/logo.png'

export default class footer extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" style={{ height: 300, backgroundColor: '#ff5252', marginTop: 30 }}>
          <Container>
            <Box display='flex' justifyContent='space-between'>

              <Grid item xs={4} style={{ marginTop: 40 }}>
                <div style={{ width: '70%' }}>
                  <div style={{ marginLeft: -35, marginRight: -35 }}>
                    <img src={Logo} alt="Dumb-Tick" style={{width: '40%', height: '40%'}}/>
                  </div>
                  <p style={{ fontSize: 17, marginTop: 0 }}>
                    dumb-tick - is a web-based platform that provides tickets for varoius events around sports, music, science and programming.
                  </p>
                </div>
              </Grid>

              <Grid item xs={4} style={{ marginTop: 30}}>
                <div style={{ marginLeft: 80 }}>
                  <h4 style={{ marginBottom: 0 }}>
                    Links
                  </h4>
                  <p style={{ marginTop: 5 }}>
                    About Us
                  </p>
                  <h4 style={{ marginBottom: 0 }}>
                    Follow Us On
                  </h4>
                  <p style={{ marginTop: 10, marginBottom: 0 }}>
                    <i class="fab fa-instagram" style={{ fontSize: 22 }}></i> Instagram
                  </p>
                  <p style={{ marginTop: 6 }}>
                    <i class="fab fa-twitter-square" style={{ fontSize: 22 }}></i> Twitter
                  </p>
                </div>
                <center>
                  <footer style={{ marginTop: 60, fontSize: 13 }}>
                    Copyright 2019 Dumb-Tick
                  </footer>
                </center>
              </Grid>

              <Grid item xs={4} style={{ marginTop: 30}}>
                <div style={{ marginLeft: 80 }}>
                  <h4 style={{ marginBottom: 0 }}>
                    Have A Question ?
                  </h4>
                  <h5 style={{ marginTop: 10, marginBottom: 0}}>
                    Dumb-Tick
                  </h5>
                  <p style={{ marginTop: 5 }}>
                    Email : support@dumbtick.com
                  </p>
                </div>
              </Grid>

            </Box>
          </Container>
        </AppBar>
      </div>
    )
  }
}
