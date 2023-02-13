import { Box, Divider, Drawer, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { ItemList } from './ItemList'

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

  const [homeListItems, setHomeListItems] = useState([{itemText:"Home Page", itemType:"Button", itemLocation:""}])
  const [mainListItems, setMainListItems] = useState([{itemText:"Graph 1", itemType:"Text", itemLocation:""}, {itemText:"Graph 2", itemType:"Text", itemLocation:""}, {itemText:"Graph 3", itemType:"Text", itemLocation:""}])
  const [speningsListItems, setSpendingsListItems] = useState([{itemText:"Spending", itemType:"Text", itemLocation:"spending"}])

  return (
    <Drawer
      variant="permanent"
      classes={{ paper: classes.paper }}
    >
      <div className={classes.lists}>
        <Divider classes={{root: classes.divider}} variant="middle"/>
        
        <ItemList listTitle={"Main"} listItems={homeListItems}/>
        <Divider classes={{root: classes.divider}} style={{marginTop:"1vh", marginBottom:"1vh"}} variant="middle"/>

        <ItemList listTitle={"Main"} listItems={mainListItems}/>
        <Divider classes={{root: classes.divider}} style={{marginTop:"1vh", marginBottom:"1vh"}} variant="middle"/>

        <ItemList listTitle={"Spending"} listItems={speningsListItems}/>
      </div>
    </Drawer>
  )
}
