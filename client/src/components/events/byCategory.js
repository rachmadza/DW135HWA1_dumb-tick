import React, { Component } from 'react'
import { Card, CardContent, CardMedia, Button, Typography, Grid, IconButton } from '@material-ui/core'

import { connect } from 'react-redux'
import { getCategoriesById } from '../../_actions/categories'
import { withRouter, Link } from 'react-router-dom';

import { convertToRupiah, convertToDateWithoutDay } from '../../helper/helper'

class ByCategory extends Component {

  componentDidMount() {
    this.props.getCategoriesById(this.props.id)
  }

  render() {
    const { detail, isLoading, error } = this.props.categories

    // const entry = {
    //   title: 'Raisa Live in Concert',
    //   price: 500000,
    //   startTime: '12 Dec 2019',
    //   img: 'https://cutt.ly/yryq6DN',
    //   description: `Raisa bersama JUNI Concert akan menggelar konser tunggal di Stadion Utama Gelora Bung Karno pada 27 Juni 2020 yang bertajuk Raisa Live in Concert Stadion Utama Gelora Bung Karno. Konser ini akan menjadi saksi nyata tentang cerita perjalanan, perjuangan, dan harapannya di industri musik, serta memberikan pesan kuat bahwa setiap orang, terutama generasi muda khususnya perempuan, bisa bermimpi dan menggapai impiannya dan bahkan menciptakan sejarah. Dalam rangka menyambut 5 tahun ada di industri musik, Raisa membuat konser tunggalnya, "Raisa Live in Concert at Istora Senayan", Jakarta. Kesuksesan konser yang diselenggarakan di tahun 2015 ini merupakan langkah awal Raisa untuk memasuki konser skala stadium. Pada tahun 2018, Raisa menggadakan intimate concert "Fermata" yang merupakan konser Raisa sebelum mengambil cuti selama 7 bulan. Perjalan baru Raisa kali ini dimulai dengan sebuah mega proyek untuk merayakan 10 tahun perjalanannya, "Raisa Live in Concert Stadion Utama Gelora Bung Karno".

    //   JUNI Concert merupakan bagian dari PT JUNI Suara Kreasi yang berfokus pada live entertainment. Berdedikasi dalam membuat rancangan sampai dengan menjalankan berbagai acara musik seperti showcase, konser tunggal, festival, konferensi, sampai dengan tur keliling kota. JUNI Concert siap untuk membantu mewujudkan dan menyampaikan visi dari para artis dan juga kliennya pada setiap acara yang ingin digelar. Tugas utama JUNI Concert sendiri adalah untuk memastikan para fans dan penonton mendapatkan sebuah pengalaman yang berkesan, dari mulai penjualan tiket, sampai dengan hari H acara pertunjukkan dengan membuat sesuatu aktivasi yang inovatif yang mengelilingi acaranya sendiri.`
    // }

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
            Getting Events
                </h1>
        </div>
      )
    }

    return (
      <div>
        <Grid container spacing={3} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
          {detail.map((entry, index) => {
            return (
              <Grid item xs={4} style={{ display: "flex" }}>
                <Card style={{ width: 400 }}>
                  <div style={{ position: 'relative' }}>
                    <Button size="medium" style={{ position: 'absolute', right: 10, top: 10, height: 35, width: 100, backgroundColor: 'white', color: 'red' }}>
                      <Typography style={{ fontSize: 13, textTransform: 'none', fontWeight: 'bold' }}>
                        {convertToRupiah(String(entry.price))}
                      </Typography>
                    </Button>
                    <CardMedia
                      component="img"
                      alt={entry.title}
                      height="140"
                      width="600"
                      image={entry.img}
                      title="Contemplative Reptile"
                    />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Link to={`/event/${entry.id}`} color='inherit' style={{ textDecoration: 'none', cursor: 'pointer', color: 'black' }}>
                        {entry.title.length > 19 ? `${entry.title.substring(0, 19)}...` : entry.title}
                      </Link>
                      <IconButton>
                        <i class="fas fa-heart" style={{ color: 'red' }}></i>
                      </IconButton>
                    </Typography>
                    <Typography component="body1" style={{ fontSize: 16, fontWeight: 'bold', color: 'red' }}>
                      {convertToDateWithoutDay(String(entry.startTime))}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ width: '95%' }}
                    >
                      {entry.description.length > 180 ? `${entry.description.substring(0, 180)}...` : entry.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}

          {/* ------------------------------------------------------------------------------------------------------------------------- */}

          {/* <Grid item xs={4} style={{ display: "flex" }}>
            <Card style={{ width: 400 }}>
                <div style={{ position: 'relative'}}>
                  <Button size="medium" style={{ position: 'absolute', right: 10, top: 10, height: 35, width: 100, backgroundColor: 'white', color: 'red'}}>
                    <Typography style={{ fontSize: 13, textTransform: 'none', fontWeight: 'bold' }}>
                      {priceFormat(entry.price)}
                    </Typography>
                  </Button>
                  <CardMedia
                    component="img"
                    alt={entry.title}
                    height="140"
                    width="600"
                    image={entry.img}
                    title="Contemplative Reptile"
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link color='inherit' style={{ textDecoration: 'none', cursor: 'pointer'}}>
                      { entry.title.length>19 ? `${entry.title.substring(0,19)}...` : entry.title } 
                    </Link>
                    <IconButton>
                      <i class="fas fa-heart" style={{ color: 'red' }}></i>
                    </IconButton>
                  </Typography>
                  <Typography component="body1" style={{ fontSize: 16, fontWeight: 'bold', color: 'red'}}>
                    {entry.startTime}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ width: '95%' }}
                  >
                    { entry.description.length>180 ? `${entry.description.substring(0,180)}...` : entry.description }
                  </Typography>
                </CardContent>
            </Card>
          </Grid> */}

          {/* ------------------------------------------------------------------------------------------------------------------------- */}

        </Grid>
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
    getCategoriesById: (id) => {
      dispatch(getCategoriesById(id))
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ByCategory))