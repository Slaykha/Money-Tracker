import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>({
  homeHeader:{
    background:"linear-gradient(to right, #0048B2 ,#3B8AFF, #0048B2)",
    width:"calc(100% - 250px)",
    height:300,
    position:"absolute",
  },
  Box:{
    background:"#1A1A1A",
    width:200,
    height:120,
    borderRadius:10,
    color:"#D3D3D3",
    marginTop:"250px",
    marginLeft:"3%",
    paddingLeft:"35px"
  },
  boxText: {
    paddingTop:"20px"
  }
}))

export const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.homeHeader}>
        <div className={classes.Box}>
          <div className={classes.boxText}> Total Spendings </div>
          <div className={classes.boxText}> ₺5.514,52</div>
        </div>
      </div>
      
    </div>
  )
}
