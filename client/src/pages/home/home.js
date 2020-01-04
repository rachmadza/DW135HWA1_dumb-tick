import React, { Component } from 'react'
import { Container } from '@material-ui/core'

import Navbar from '../../components/navbar/navbar'
import Search from '../../components/searchBar/searchBar'
import Categories from '../../components/categories/categories'
import EventsToday from '../../components/events/events'
import EventsUpcoming from '../../components/events/upcoming'
import Footer from '../../components/footer/footer'

export default class home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#f5e0df' }}>
        <Navbar />
        <div>
          <Container>
            <div style={{ marginTop: 50 }}>
              <Search />
            </div>
            <h1 style={{ fontSize: 45, color: '#ff5252' }}>
              Category
            </h1>
            <Categories />
            <h1 style={{ fontSize: 45, color: '#ff5252' }}>
              Today
            </h1>
            <EventsToday />
            <h1 style={{ fontSize: 45, color: '#ff5252' }}>
              Upcoming Event
            </h1>
            <EventsUpcoming />
          </Container>
        </div>
        <Footer />
      </div>
    )
  }
}
