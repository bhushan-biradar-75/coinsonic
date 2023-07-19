import React, { useContext } from 'react'
import { getUpdatedNews } from '../Services/Apiservices'
import { useState } from 'react';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import NewsCard from '../Component/NewsCard';
import Loader from '../Component/Loader';
import { myContext } from '../ContextAPI';
// import ContextAPI from '../ContextAPI';

const News = () => {

  // const res = useContext(ContextAPI)
  // console.log("res-->",res)
  const GlobalNewsData = useContext(myContext);
  console.log("GlobalNewsData-->",GlobalNewsData)
  const [newsData , setnewsData] = useState({
    newsDescription : GlobalNewsData.newsData ?? []
  })
  const [block , setblock] = useState(false);
  const getNews = async () => {
  setblock(true)
	// const response = await getUpdatedNews();
  setnewsData({ newsDescription : GlobalNewsData.newsData })
  setblock(false)
} 

useEffect(() => {
  getNews();
},[])
console.log("news data",newsData.newsDescription)
  return (
    <Container>
     <Grid container spacing={1}>
       
        {newsData.newsDescription.map((item, index) => (
          <Grid item xs={12} sm={6} md={4}>
         <NewsCard
         key={index}
         url={item.image.thumbnail.contentUrl}
         title={item.name}
         description={item.description}
         />
         </Grid>
         
         ))
         }
      </Grid>
      <Loader
      blocking={block}
     /> 
      </Container>
  )
}

export default News