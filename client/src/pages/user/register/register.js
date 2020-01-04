import React, { Component } from "react";
import "./register.css";

//import API material UI
import { Box, Container, Grid, Hidden, TextField, Button } from "@material-ui/core";

import Navbar from '../../../components/navbar/navbar'
import Footer from '../../../components/footer/footer'

//import Link Router
import { connect } from 'react-redux'
import { setRegister } from '../../../_actions/user'
import { Link } from "react-router-dom"


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { fullname: '', username: '', email: '', password: '' };

    this.handleFullname = this.handleFullname.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  componentWillMount() {
    // this.props.setRegister()
  }

  handleFullname = (event) => {
    this.setState({ fullname: event.target.value });
  }
  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  }
  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  }
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  handleRegister(event) {
    const registerData = {
      name: this.state.fullname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    this.props.setRegister(registerData)
  }
  render() {
    const { status, userRegister } = this.props.user;

    const getToken = localStorage.getItem('AUTH_TOKEN')

    if (getToken) {
      window.location.replace("/");
    }

    if (status) {
      localStorage.setItem("AUTH_TOKEN", userRegister.token);
      window.location.replace("/");
    }
    return (
      <div style={{ backgroundColor: '#f5e0df' }}>
        <Navbar />

        <Container maxWidth="md" style={{ marginTop: 50 }}>
          <Box className="box-shadow-reg" borderRadius="borderRadius" border={1} borderColor="#BCBCBC" style={{ backgroundColor: '#f5e0df' }}>
            <Grid container spacing={1}>
              {/* Grid Left Image */}
              <Hidden smDown>
                <Grid item xs>
                  <img src='' width="80%" />
                </Grid>
              </Hidden>
              {/* End Grid Left Image */}

              {/* Grid Register */}
              <Grid item xs={12} sm={12} md={6}>
                <h2 className="font-header-reg"> Join Dumb-Tick. </h2>

                <form className="data-reg">
                  {/* Form Data */}
                  <p>Your fullname</p>
                  <TextField onChange={this.handleFullname} className="input-reg" id="outlined-basic" />
                  <p>Your username</p>
                  <TextField onChange={this.handleUsername} className="input-reg" id="outlined-basic" />
                  <p>Your email</p>
                  <TextField onChange={this.handleEmail} className="input-reg" id="outlined-basic" />
                  <p>Your password</p>
                  <TextField onChange={this.handlePassword} className="input-reg" id="outlined-basic" type='password' />

                  {/* Button Register */}
                  <div>
                    <Button onClick={this.handleRegister} variant="contained" style={{ marginTop: 20, marginBottom: 15, backgroundColor: 'black', color: 'white', fontSize: 12, textTransform: 'none' }}>
                      Register
                </Button>
                  </div>
                </form>

                <p className="sign-in-reg">
                  Already have an account?{" "}
                  <Link to="Login" className="link-reg">
                    Sign In
                  </Link>
                </p>

              </Grid>
              {/* End Grid Register */}

              {/* Grid Right Image */}
              <Hidden smDown>
                <Grid item xs>
                  <img style={{ marginLeft: 43 }} src='' width="80%" />
                </Grid>
              </Hidden>
              {/*End Grid Right Image */}


            </Grid>
          </Box>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setRegister: (reg) => {
      dispatch(setRegister(reg))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register)