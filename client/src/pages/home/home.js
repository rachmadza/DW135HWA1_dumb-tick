import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar' 
import Categories from '../../components/categories/categories'
import Events from '../../components/events/events'

export default class home extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
              <Navbar />
                <div>
                  <h1>
                      Category
                  </h1>
                  <Categories />
                  <h1>
                      Today
                  </h1>
                  <Events />
                </div>
            </div>
        )
    }
}
