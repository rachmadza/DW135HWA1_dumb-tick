import React, { Component } from 'react'
import { Container, Button } from '@material-ui/core'

import Navbar from '../../components/navbar/navbar'
import Events from '../../components/events/events'
import Footer from '../../components/footer/footer'

export default class editProfile extends Component {

  render() { 

    const user = {
        id: 1,
        name: "Pevitaku",
        phoneNumber: "081234567890",
        email: "Pevitaku@gmail.com",
        username: "Pev",
        img: 'https://cutt.ly/MrycnGA'
    }

    return (
      <div style={{ backgroundColor: '#f5e0df' }}>
        <Navbar />
        <div style={{ marginBottom: 80 }}>
          <Container>
            <div style={{ marginTop: 50 }}>
                  <h1 style={{ fontSize: 45, color: '#ff5252' }}>
                    Profile
                  </h1>
                  <div style={{display:'flex', alignItems:"center", borderRadius:"10px", backgroundColor:"#fff", overflow:"hidden", maxWidth:"50%"}}>
                    <div style={{
                      backgroundImage:`url(${user.img})`,
                      backgroundPosition:"center",
                      backgroundRepeat:"no-repeat",
                      backgroundSize:"cover",
                      height:"300px",
                      width:"250px"
                    }} />
                    <div style={{display:"flex", alignItems:"center", marginLeft:"10px"}}>
                      <div style={{
                        borderLeft:'2px solid #9e9e9e', 
                        height:'270px',
                        width: '330px',
                        overflow: 'hidden'
                      }}>
                        <div style={{marginLeft:"10px"}}>
                          <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#ff5252', borderRadius: 10, marginBottom: 25 }}>
                            <h1 style={{ fontSize: 45, color: '#fff' }}>
                              {user.username}
                            </h1>
                          </div>
                        <table style={{ color: '#9e9e9e' }}>
                          <tr>
                            <th align="left">Name</th>
                            <td>:</td>
                            <td>{user.name}</td>
                          </tr>
                          <tr>
                            <th align="left">Phone</th>
                            <td>:</td>
                            <td>{user.phoneNumber}</td>
                          </tr>
                          <tr>
                            <th align="left">Email</th>
                            <td>:</td>
                            <td>{user.email}</td>
                          </tr>
                        </table>
                        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                          <Button variant='contained' style={{ marginTop: 25, boxShadow: 'none', textTransform: 'none', backgroundColor: 'grey', fontWeight: 'bold', color: '#fff', borderRadius: 5 }}>
                            Cancel
                          </Button>
                          <Button variant='contained' style={{ marginTop: 25, boxShadow: 'none', textTransform: 'none', backgroundColor: 'green', fontWeight: 'bold', color: '#fff', borderRadius: 5 }}>
                            Save
                          </Button>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div>
              <h1 style={{ fontSize: 45, color: '#ff5252' }}>
                Favorite
              </h1>
              <Events />
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    )
  }
}
