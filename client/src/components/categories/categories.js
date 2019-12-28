import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../../_actions/categories'

class Categories extends Component {
    componentDidMount() {
        this.props.getCategories()
    }

    render() {
        const { data, isLoading, error } = this.props.categories
        // console.log(this.props.categories)

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
                        Now Loading
                    </h1>
                </div>
            )
        }

        return (
            <div>
                <center>
                    {data.map((item, index) => {
                        return <button style={{marginLeft: 20, marginRight:20}} key={index}>{item.name}</button>
                    })}
                </center>
            </div>
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