import React, { Component } from "react";
import './login.css';

import { Container, Box, TextField, Button } from "@material-ui/core"

import Navbar from '../../../components/navbar/navbar'
import Footer from '../../../components/footer/footer'

import { connect } from 'react-redux'
import { setLogin } from '../../../_actions/user'
import { Link } from "react-router-dom"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  componentWillMount() {
    // this.props.setLogin()
  }

  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  }
  handlePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  handleLogin(event) {
    const loginData = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.setLogin(loginData)
  }

  render() {
    const { status, userLogin } = this.props.user;
    // console.log(userLogin)

    if (status) {
      localStorage.setItem("AUTH_TOKEN", userLogin.token);
      window.location.replace("/");
    }
    return (
      <div style={{ backgroundColor: '#f5e0df' }}>
        <Navbar />
        <Container maxWidth="md" style={{ marginTop: 50 }}>
          <Box className="box-shadow-log" borderRadius="borderRadius" border={1} borderColor="#BCBCBC" style={{ backgroundColor: '#f5e0df' }}>
            <Container maxWidth="sm" style={{ width: "60%" }}>
              <h2 className="font-header-log">
                Welcome Back
            </h2>

              <form className="data-log">
                <p>Your Username</p>
                <TextField onChange={this.handleUsername} className="input-log" id="outlined-basic" />
                <p>Your password</p>
                <TextField onChange={this.handlePassword} className="input-log" id="outlined-basic" type='password' />
                <center>
                  <Button onClick={this.handleLogin} variant="contained" style={{ marginTop: 20, marginBottom: 15, backgroundColor: 'black', color: 'white', fontSize: 12, textTransform: 'none' }}>
                    Login
                </Button>
                </center>
              </form>
              <Link to="/register" className="link-log">
                <p className="sign-opt">
                  {"<"} Register
              </p>
              </Link>
            </Container>
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
    setLogin: (data) => {
      dispatch(setLogin(data))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
