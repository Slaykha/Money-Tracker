import { Divider, Drawer } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { ItemList } from './ItemList'
import AddIcon from '@mui/icons-material/Add';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import TimelineIcon from '@mui/icons-material/Timeline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 250

const useStyles = makeStyles({
  paper:{
    "&&": {
      width: drawerWidth,
      backgroundColor: "#1A1A1A",
      height:"calc(100% - 50px)",
      marginTop:"60px"
    }
  },
  divider:{
    background:"rgba(256,256,256,0.3)"
  },
  lists:{
    marginTop:"20px",
    
  }
})

export const LeftDrawer = () => {
  const classes = useStyles()

  const [homeListItems, setHomeListItems] = useState([{itemText:"Home Page", itemType:"Button", itemLocation:"", itemIcon:<AddIcon />}])
  const [graphListItems, setGraphListItems] = useState([{itemText:"Line Graph", itemType:"Text", itemLocation:"lineGraph", itemIcon:<TimelineIcon />}, {itemText:"Bar Graph", itemType:"Text", itemLocation:"barGraph", itemIcon:<EqualizerIcon />}, {itemText:"Radial Graph", itemType:"Text", itemLocation:"radialBarGraph", itemIcon:<DataUsageIcon />}])
  const [trackerListItems, setTrackerListItems] = useState([{itemText:"Daily Tracker", itemType:"Text", itemLocation:"dailyTracker", itemIcon:<DataUsageIcon />}])
  const [speningsListItems, setSpendingsListItems] = useState([{itemText:"Spendings", itemType:"Text", itemLocation:"spending", itemIcon:<AddIcon />}])
  const [userItems, setUserItems] = useState([{itemText:"Profile", itemType:"Text", itemLocation:"profile", itemIcon:<AccountCircleIcon />}])

  return (
    <Drawer
      variant="permanent"
      classes={{ paper: classes.paper }}
    >
      <div className={classes.lists}>
        <Divider classes={{root: classes.divider}} variant="middle"/>
        
        <ItemList listTitle={"Main"} listItems={homeListItems}/>
        <Divider classes={{root: classes.divider}} style={{marginTop:"1vh", marginBottom:"1vh"}} variant="middle"/>

        <ItemList listTitle={"Graphs"} listItems={graphListItems}/>
        <Divider classes={{root: classes.divider}} style={{marginTop:"1vh", marginBottom:"1vh"}} variant="middle"/>

        <ItemList listTitle={"Trackers"} listItems={trackerListItems}/>
        <Divider classes={{root: classes.divider}} style={{marginTop:"1vh", marginBottom:"1vh"}} variant="middle"/>

        <ItemList listTitle={"Spending"} listItems={speningsListItems}/>
        <Divider classes={{root: classes.divider}} style={{marginTop:"1vh", marginBottom:"1vh"}} variant="middle"/>

        <ItemList listTitle={"User"} listItems={userItems}/>
      </div>
    </Drawer>
  )
}
