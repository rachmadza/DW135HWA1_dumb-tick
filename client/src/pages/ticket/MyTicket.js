import React, { Component } from 'react'
import { Container, Typography, Card, Box } from '@material-ui/core'

import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import QR from '../../img/qr.webp'

import { connect } from 'react-redux'
import { getTicket } from '../../_actions/payment'
import { Link } from 'react-router-dom'

import { convertToRupiah, convertToDateWithoutDay, convertToTime } from '../../helper/helper'

class MyTicket extends Component {

  componentDidMount() {
    this.props.getTicket()
  }

  if(error) {
    return (
      <div>
        <h1>
          Error
              </h1>
      </div>
    )
  }

  if(isLoading) {
    return (
      <div>
        <h1>
          Getting Ticket
        </h1>
      </div>
    )
  }

  render() {
    const { ticket, isLoading, error } = this.props.order
    return (
      <div style={{ backgroundColor: '#f5e0df' }}>
        <Navbar />
        <div style={{ marginBottom: 80 }}>
          <Container>
            <div style={{ marginTop: 50 }}>
              <h1 style={{ fontSize: 45, color: '#ff5252' }}>
                My Ticket
              </h1>

              <Box borderBottom={8} color='#ff5252'></Box>

              <Card variant='outlined' style={{ borderRadius: 0 }}>

                <Container maxWidth='md'>
                  <div style={{ marginTop: 80 }} />
                  {ticket.map((entry, index) => {
                    return (

                    <Box border={20} borderColor='#ff5252' marginBottom='80px'>
                      <div style={{ marginTop: 0, backgroundColor: 'grey', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 30, marginRight: 10, marginBottom: 0 }}>
                          <Typography style={{ fontSize: 25 }}>
                          {entry.buyerName}
                          </Typography>
                          <Typography style={{ fontSize: 15 }} >
                          ID {entry.buyerId}
                          </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 30, marginRight: 10, marginTop: 0 }}>
                          <Typography style={{ fontSize: 13, marginBottom: 18 }}>
                          Face Value {convertToRupiah(String(entry.price))}
                          </Typography>
                          <Typography style={{ fontSize: 15 }} >
                          Status: {entry.status}
                          </Typography>
                        </div>
                      </div>
                      <div style={{ marginTop: 0, marginLeft: 30, backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '60%' }}>
                          <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>
                          {entry.title}
                          </Typography>
                          <Typography style={{ fontSize: 20 }}>
                          {convertToDateWithoutDay(String(entry.startTime))} at {convertToTime(String(entry.startTime))} WIB
                          </Typography>
                          <Typography style={{ fontSize: 14 }}>
                          {entry.address}
                          </Typography>
                        </div>
                        <div style={{ backgroundImage: `url(${QR})`, width: 120, height: 120, backgroundSize: 'cover' }} />
                      </div>
                    </Box>
                    )
                  })}

                </Container>

              </Card>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    order: state.order
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTicket: () => {
      dispatch(getTicket())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyTicket)