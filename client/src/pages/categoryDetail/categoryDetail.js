import React, { Component } from 'react'
import { Container, Typography } from '@material-ui/core'

import Navbar from '../../components/navbar/navbar'
import Events from '../../components/events/byCategory'
import Footer from '../../components/footer/footer'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { getCategoryName } from '../../_actions/categories'

class CategoryDetail extends Component {
  componentDidMount() {
    this.props.getCategoryName(this.props.id)

  }

  render() {

    const { name, isLoading, error } = this.props.categories

    // if (error) {
    //   return (
    //     <div>
    //       <h1>
    //         Error
    //           </h1>
    //     </div>
    //   )
    // }

    // if (isLoading) {
    //   return (
    //     <div>
    //       <h1>
    //         Getting Name
    //           </h1>
    //     </div>
    //   )
    // }

    return (
      <div style={{ backgroundColor: '#f5e0df' }}>
        <Navbar />
        <div style={{ marginBottom: 80 }}>
          <Container>
            <div style={{ marginTop: 50 }}>
              <h1 style={{ fontSize: 45, color: '#ff5252' }}>
                {name.name}
              </h1>
              <Typography color="textSecondary" style={{ marginTop: 40, marginBottom: 30, fontSize: 27 }}>
                Sort by : 'ini date picker'
              </Typography>
              <Events />
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
    categories: state.categories,
    id: getParams.match.params.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategoryName: (id) => {
      dispatch(getCategoryName(id))
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryDetail))
