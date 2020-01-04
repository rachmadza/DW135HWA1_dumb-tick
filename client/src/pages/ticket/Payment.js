import React, { Component } from 'react'
import { Container, Typography, Grid, Card, Box, Divider, Button } from '@material-ui/core'

import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { getPayment } from '../../_actions/payment'

import { convertToRupiah, convertToDateWithoutDay, convertToTime } from '../../helper/helper'

class Payment extends Component {
  componentDidMount() {
    this.props.getPayment(this.props.id)
  }
  render() {

    const { payment, isLoading, error } = this.props.order
    console.log(payment)

    return (
      <div style={{ backgroundColor: '#f5e0df' }}>
        <Navbar />
        <div style={{ marginBottom: 80 }}>
          <Container>
            <div style={{ marginTop: 50 }}>
              <h1 style={{ fontSize: 45, color: '#ff5252' }}>
                Payment
              </h1>

              <Grid container>
                <Grid item xs={6}>
                  <h2 style={{ fontSize: 40, color: 'white', backgroundColor: '#ff5252', marginBottom: 0, padding: 10, textAlign: 'center' }}>
                    Payment
                  </h2>
                </Grid>
                <Grid item xs={6} />
              </Grid>

              <Box borderBottom={8} color='#ff5252'></Box>

              <Card variant='outlined' style={{ borderRadius: 0 }}>

                <Container maxWidth='md'>
                  <Box border={20} borderColor='#ff5252' marginTop='80px'>
                    <div style={{ marginTop: 0, backgroundColor: 'grey', display: 'flex', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 30, marginRight: 10, marginBottom: 0 }}>
                        <Typography style={{ fontSize: 25 }}>
                          {payment.buyerName}
                        </Typography>
                        <Typography style={{ fontSize: 15 }} >
                          ID {payment.buyerId}
                        </Typography>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 30, marginRight: 10, marginTop: 0 }}>
                        <Typography style={{ fontSize: 13, marginBottom: 18 }}>
                          Face Value {convertToRupiah(String(payment.price))}
                        </Typography>
                        <Typography style={{ fontSize: 15 }} >
                          Status: {payment.status}
                        </Typography>
                      </div>
                    </div>
                    <div style={{ marginTop: 0, marginLeft: 30, backgroundColor: 'white', display: 'flex', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '60%' }}>
                        <Typography style={{ fontSize: 30, fontWeight: 'bold' }}>
                          {payment.title}
                        </Typography>
                        <Typography style={{ fontSize: 20 }}>
                          {convertToDateWithoutDay(String(payment.startTime))} at {convertToTime(String(payment.startTime))} WIB
                        </Typography>
                        <Typography style={{ fontSize: 14 }}>
                          {payment.address}
                        </Typography>
                      </div>
                    </div>
                  </Box>

                  <Typography style={{ marginLeft: 50, marginTop: 20, fontSize: 25 }}>
                    Shopping summary
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography style={{ marginLeft: 50, marginTop: 20 }}>
                      Total Price ({payment.quantity} Items)
                    </Typography>
                    <Typography style={{ marginLeft: 50, marginTop: 20, marginRight: 30 }}>
                      {convertToRupiah(String(payment.totalPrice))}
                    </Typography>
                  </div>
                  <Divider style={{ marginTop: 30, height: 2.5 }} />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 30, marginBottom: 100 }}>
                    <Button style={{ fontSize: 25, backgroundColor: '#ff5252', color: 'white', textTransform: 'none', fontWeight: 'bold', padding: 0, width: 150, borderRadius: 10 }}>
                      Confirm
                    </Button>
                  </div>
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

const mapStateToProps = (state, getParams) => {
  return {
    order: state.order,
    id: getParams.match.params.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPayment: (id) => {
      dispatch(getPayment(id))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Payment))
