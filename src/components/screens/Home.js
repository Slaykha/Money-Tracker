import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>({
  homeHeader:{
    background:"linear-gradient(to right, #0048B2 ,#3B8AFF, #0048B2)",
    width:"100%",
    height:300,
    position:"absolute",
  }
}))

export const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div>deneme</div>
      <div className={classes.homeHeader}>

      </div>
    </div>
  )
}
