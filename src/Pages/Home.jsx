import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import React, { createContext, useContext, useEffect } from 'react'
import { getCoin } from '../Services/Apiservices'
import { AppBar, Toolbar, Container, Grid, Paper } from '@mui/material';
import { useState } from 'react';
import CryptoCurrencyCard from '../Component/CryptoCurrencyCard';
import Loader from '../Component/Loader';
import { color } from '@mui/system';
import { myContext } from '../ContextAPI';

const Home = () => {
  const UserContext = useContext(myContext);
  const [apiRes, setapiRes] = useState({
    totalCoinData: [],  
    coinCardsData: [],
})
  
  const [block, setblock] = useState(false)
  console.log("home context data",UserContext.globalAPIdata)
  const ShowCoinInfo = async (res) => {
    console.log("show coin info",res)
    setblock(true)
    setapiRes({ totalCoinData: res.globalAPIdata.totalCoinData.data.data.stats, coinCardsData: res.globalAPIdata.totalCoinData.data.data.coins, block: false }),
      setblock(false)
  }
  useEffect(() => {
    ShowCoinInfo(UserContext)
  }, [])
  console.log("totlcoin--->",apiRes.totalCoinData)
  console.log("coincard---->",apiRes.coinCardsData)
  return (
    <>
      {/* <h1>Coin Sonic Present</h1> */}
      <Container> 
        <Paper>
          <Grid container spacing={4} mt={2}>
            <Grid item xs={12} sm={6} md={6} >
              <Typography color="textSecondary" >Total Cryptocurrency</Typography>
              <Typography variant='h5'>{apiRes.totalCoinData.total}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography color="textSecondary">Total Exchange</Typography>
              <Typography variant='h5' >{apiRes.totalCoinData.totalExchanges}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography color="textSecondary">Total Market Cap</Typography>
              <Typography variant='h5'>{apiRes.totalCoinData.totalMarketCap}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography color="textSecondary">Total 24 Volume</Typography>
              <Typography  variant='h5'>{apiRes.totalCoinData.total24hVolume}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Typography color="textSecondary">Total Cryptocurrency </Typography>
              <Typography variant='h5'>{apiRes.totalCoinData.totalCoins} </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} mb={2}>
              <Typography color="textSecondary">Total Market</Typography>
              <Typography variant='h5'>{apiRes.totalCoinData.totalMarkets}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <br />
      <br />
      <br />
      <Typography variant="h5" sx={{
        fontFamily: "sans-serif",
        color: "black"
      }}>
        Top 50 Coins
      </Typography>
      <br />
      <Loader
        blocking={block}
      />
      <br />
      <Grid container spacing={1}>
        {apiRes.coinCardsData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4}>
            <CryptoCurrencyCard
              key={index}
              coinName={item.name}
              symBol={item.symbol}
              subTitleone={item.price}
              iconLink={item.iconUrl}
              subTitleTwo={item.marketCap}
              volume={item.rank}
            />

          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Home