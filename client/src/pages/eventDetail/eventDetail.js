import React, { Component } from 'react'
import { Container, Typography, Card, Grid, IconButton, Divider } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import EventIcon from '@material-ui/icons/Event'; //date
import ScheduleIcon from '@material-ui/icons/Schedule'; //time

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'; //name
import PhoneIcon from '@material-ui/icons/Phone'; //phone
import MailIcon from '@material-ui/icons/Mail'; //Mail

import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'; //location

import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { getEventDetail } from '../../_actions/events'
import { setOrder } from '../../_actions/payment'

import { convertToRupiah, convertToDateWithoutDay, convertToTime } from '../../helper/helper'

class EventDetail extends Component {
  state = {
    counter: 0
  }

  componentDidMount() {
    this.props.getEventDetail(this.props.id)
  }

  incrementCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrementCount = () => {
    this.setState({
      counter: this.state.counter !== 0 ? (this.state.counter -= 1) : 0
    });
  }

  render() {

    const { detail, isLoading, error } = this.props.events

    return (
      <div style={{ backgroundColor: '#f5e0df' }}>
        <Navbar />
        <div style={{ marginBottom: 80 }}>
          <Container style={{ width: '85%' }}>
            <div style={{ marginTop: 100 }}>
              <Card variant="outlined" style={{ backgroundColor: '#f5e0df', borderWidth: 5, borderColor: '#cccccc', borderRadius: 10 }}>
                <CardMedia
                  image={detail.img}
                  title={detail.title}
                  style={{ height: 500 }}
                />
                <CardContent>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography style={{ fontSize: 42 }}>
                      {detail.title}
                    </Typography>
                    <Typography style={{ fontSize: 40, fontWeight: 'bold', color: 'red' }}>
                      {convertToRupiah(String(detail.price))}
                    </Typography>
                  </div>

                  <Grid container style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

                    <Grid item xs={10}>
                      <Typography style={{ fontSize: 25, color: 'red' }}>
                        {detail.category_name}
                      </Typography>
                    </Grid>

                    <Grid item xs={1} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                      <IconButton onClick={this.decrementCount}>
                        <RemoveIcon style={{ color: 'red', backgroundColor: 'white', fontSize: 30, borderRadius: 5 }} />
                      </IconButton>
                      <Typography style={{ fontSize: 28, color: 'red' }}>
                        {this.state.counter}
                      </Typography>
                      <IconButton onClick={this.incrementCount}>
                        <AddIcon style={{ color: 'red', backgroundColor: 'white', fontSize: 30, borderRadius: 5 }} />
                      </IconButton>
                    </Grid>

                    <Grid item xs={1} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button style={{ color: 'white', backgroundColor: 'red', borderRadius: 10, padding: 0, width: 70 }}>
                        <Typography style={{ fontSize: 21, fontWeight: 'bold' }}>
                          Buy
                        </Typography>
                      </Button>
                    </Grid>

                  </Grid>

                  <Divider style={{ height: 2 }} />

                  <Grid container style={{ marginTop: 30 }}>

                    <Grid ite xs={4}>
                      <Typography style={{ fontSize: 25, color: '#454545', fontWeight: 'bold', marginBottom: 30 }}>
                        Hosted By
                      </Typography>
                      <div>
                        <CardMedia
                          image={detail.createdBy_img}
                          title='Juni Concert'
                          style={{ height: 100, width: 100 }}
                        />
                      </div>
                    </Grid>

                    <Grid ite xs={4}>
                      <div style={{ marginLeft: 70 }}>
                        <Typography style={{ fontSize: 25, color: '#454545', fontWeight: 'bold', marginBottom: 30 }}>
                          Date & Time
                        </Typography>
                        <div style={{ color: '#9e9e9e' }}>
                          <p style={{ display: 'flex', alignItems: 'center' }}>
                            <EventIcon style={{ marginRight: 10 }} /> {`${convertToDateWithoutDay(String(detail.startTime))} - ${convertToDateWithoutDay(String(detail.endTime))}`}
                          </p>
                          <p style={{ display: 'flex', alignItems: 'center' }}>
                            <ScheduleIcon style={{ marginRight: 10 }} /> {`${convertToTime(String(detail.startTime))} - ${convertToTime(String(detail.endTime))} WIB`}
                          </p>
                        </div>
                      </div>
                    </Grid>

                    <Grid ite xs={4}>
                      <div style={{ marginLeft: 70 }}>
                        <Typography style={{ fontSize: 25, color: '#454545', fontWeight: 'bold', marginBottom: 30 }}>
                          Contact Person
                        </Typography>
                        <div style={{ color: '#9e9e9e' }}>
                          <p style={{ display: 'flex', alignItems: 'center' }}>
                            <AssignmentIndIcon style={{ marginRight: 10 }} /> {detail.createdBy_name}
                          </p>
                          <p style={{ display: 'flex', alignItems: 'center' }}>
                            <PhoneIcon style={{ marginRight: 10 }} /> {detail.createdBy_phone}
                          </p>
                          <p style={{ display: 'flex', alignItems: 'center' }}>
                            <MailIcon style={{ marginRight: 10 }} /> {detail.createdBy_email}
                          </p>
                        </div>
                      </div>
                    </Grid>

                  </Grid>

                </CardContent>

              </Card>

              <Grid container style={{ marginTop: 30 }}>

                <Grid item xs={5} style={{ display: 'flex', flexDirection: 'column' }}>
                  <center>
                    <h2 style={{ color: '#454545' }}>
                      Event Description
                    </h2>
                    <p style={{ textAlign: 'justify', fontSize: 15, color: '#9e9e9e' }}>
                      {detail.description}
                    </p>
                  </center>
                </Grid>

                <Grid item xs={2} style={{ display: 'flex', justifyContent: 'center', marginTop: 25 }}>
                  <Divider orientation="vertical" style={{ width: 2 }} />
                </Grid>

                <Grid item xs={5} style={{ display: 'flex', flexDirection: 'column' }} >
                  <center>
                    <h2 style={{ color: '#454545' }}>
                      Location
                    </h2>
                  </center>
                  <p style={{ display: 'flex', alignItems: 'center', fontSize: 15, color: '#9e9e9e' }} >
                    <LocationOnOutlinedIcon style={{ marginRight: 10 }} />  {detail.address}
                  </p>
                  <iframe src={detail.urlMaps} variant="outlined" style={{ width: 440, height: 350, borderWidth: 5, borderColor: '#cccccc', marginTop: 15 }} ></iframe>
                  <center>
                    <h2 style={{ marginTop: 30, color: '#454545' }}>
                      Share Event
                    </h2>
                  </center>
                  <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20 }} >
                    <Button style={{ backgroundColor: '#38A1F3', color: 'white', textTransform: 'none', width: 120, fontSize: 15, padding: 3 }} >
                      <i class="fab fa-twitter-square" style={{ fontSize: 22, marginRight: 8 }} ></i> Twitter
                    </Button>
                    <Button style={{ backgroundColor: '#4267b2', color: 'white', textTransform: 'none', width: 120, fontSize: 15, padding: 3 }} >
                      <i class="fab fa-facebook-square" style={{ fontSize: 22, marginRight: 8 }} ></i> Facebook
                    </Button>
                    <Button style={{ backgroundColor: '#666666', color: 'white', textTransform: 'none', width: 120, fontSize: 15, padding: 3 }} >
                      <i class="fas fa-link" style={{ fontSize: 22, marginRight: 8 }} ></i> Copy Link
                    </Button>
                  </div>
                </Grid>

              </Grid>

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
    events: state.events,
    id: getParams.match.params.id,
    order: state.order
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEventDetail: (id) => {
      dispatch(getEventDetail(id))
    },

    setOrder: (data) => {
      dispatch(setOrder(data))
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventDetail))