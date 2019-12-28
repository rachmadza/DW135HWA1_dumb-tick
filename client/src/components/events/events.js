import React, { Component } from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux'
import { getEvents } from '../../_actions/events'

class Events extends Component {
    componentDidMount() {
        this.props.getEvents()
    }

    render() {
        const { data, isLoading, error } = this.props.events
        console.log(this.props.events)

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
                        Getting Events
                    </h1>
                </div>
            )
        }

        return (
            <div>
                <center>
                        {/* return <button key={index}>{item.title}</button> */}
                          <Grid container style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", spacing: 20}} >
                            {data.map((entry, index) => {
                                return (
                                <Grid
                                    item
                                    style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    paddingRight: 20, paddingBottom: 20
                                    }}
                                >
                                    <Card style={{ width: 390 }}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        width="600"
                                        image={entry.image}
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {entry.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            {entry.description}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="white" backgroundColor="black">
                                            {entry.price}
                                        </Button>
                                    </CardActions>
                                    </Card>
                                </Grid>
                                );
                            })}
                            </Grid>
                </center>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        events: state.events
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEvents: () => {
            dispatch(getEvents())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Events)