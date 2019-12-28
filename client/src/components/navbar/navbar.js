import React, { Component } from 'react'
import { AppBar, Toolbar, Grid, IconButton, MenuIcon, Typography, Button} from '@material-ui/core'

export default class navbar extends Component {
    render() {
        return (
            <div>
            <AppBar position="static">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography>
                                Dumb-Tick
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button>
                                    Register
                                </Button>
                                <Button>
                                    Login
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            </div>
        )
    }
}
