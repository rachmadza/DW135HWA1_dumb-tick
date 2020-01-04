import React, { Component } from 'react'
import { Box, Button } from '@material-ui/core'

import { connect } from 'react-redux'
import { getCategories } from '../../_actions/categories'
import { Link } from 'react-router-dom'

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const { data, isLoading, error } = this.props.categories
    // console.log(this.props.categories)

    if (error) {
      return (
        <div>
          <h1>
            Error
                </h1>
        </div>
      )
    }

    if (isLoading) {
      return (
        <div>
          <h1>
            Now Loading
                </h1>
        </div>
      )
    }

    return (
      <Box display='flex' justifyContent='space-between'>
        {data.map((item, index) => {
          return (
            <Link to={'/category/' + item.id} style={{ textDecoration: 'none' }}>
              <Button style={{ backgroundImage: "url('https://cutt.ly/prtGpwp')", color: 'white', width: 250, height: 50 }} key={index}>{item.name}</Button>
            </Link>
          )
        })}
      </Box>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch(getCategories())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories)