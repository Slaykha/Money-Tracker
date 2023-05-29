import { Box, Divider, Drawer, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { ItemList } from './ItemList'
import AddIcon from '@mui/icons-material/Add';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import TimelineIcon from '@mui/icons-material/Timeline';
import EqualizerIcon from '@mui/icons-material/Equalizer';

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
  const [graphListItems, setGraphListItems] = useState([{itemText:"Graph 1", itemType:"Text", itemLocation:"", itemIcon:<TimelineIcon />}, {itemText:"Graph 2", itemType:"Text", itemLocation:"", itemIcon:<EqualizerIcon />}, {itemText:"Graph 3", itemType:"Text", itemLocation:"", itemIcon:<DataUsageIcon />}])
  const [trackerListItems, setTrackerListItems] = useState([{itemText:"Daily Tracker", itemType:"Text", itemLocation:"dailyTracker", itemIcon:<DataUsageIcon />}])
  const [speningsListItems, setSpendingsListItems] = useState([{itemText:"Spendings", itemType:"Text", itemLocation:"spending", itemIcon:<AddIcon />}])

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
      </div>
    </Drawer>
  )
}
