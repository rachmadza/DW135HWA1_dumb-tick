import React, { Component } from 'react'

import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import { Container, Typography, TextField } from '@material-ui/core'

export default class AddEvent extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#f5e0df' }}>
        <Navbar />
        <div style={{ marginBottom: 80 }}>
          <Container>
            <div style={{ marginTop: 50 }}>
              <h1 style={{ fontSize: 45, color: '#ff5252' }}>
                Add Event
              </h1>

              <Container maxWidth='lg' style={{ display: 'flex', justifyContent: 'center'}}>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '60%' }}>  
                  <p>Name</p>
                  <TextField className="input-log" id="outlined-basic" />
                  <p>Name</p>
                  <TextField className="input-log" id="outlined-basic" />
                  <p>Name</p>
                  <TextField className="input-log" id="outlined-basic" />
                  <p>Name</p>
                  <TextField className="input-log" id="outlined-basic" />
                  <p>Name</p>
                  <TextField className="input-log" id="outlined-basic" />
                  <p>Name</p>
                  <TextField className="input-log" id="outlined-basic" />
                  <p>Name</p>
                  <TextField className="input-log" id="outlined-basic" />
                  <p>Name</p>
                  <TextField className="input-log" id="outlined-basic" />
                  <p>Name</p>
                  <TextField className="input-log" id="outlined-basic" />
                  <p>Name</p>
                  <TextField className="input-log" id="outlined-basic" />
                  <p>Name</p>
                  <TextField className="input-log" id="outlined-basic" />
                </div>

              </Container>

            </div>
          </Container>
        </div>
        <Footer />
      </div>
    )
  }
}
