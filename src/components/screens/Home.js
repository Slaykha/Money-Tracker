import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>({
  homeHeader:{
    background:"linear-gradient(to right, #0048B2 ,#3B8AFF, #0048B2)",
    width:"calc(100% - 250px)",
    height:300,
    position:"absolute",
  }
}))

export const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.homeHeader}>

      </div>
    </div>
  )
}
