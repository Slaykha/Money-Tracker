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
      marginTop:"50px"
    }
  },
  divider:{
    background:"rgba(256,256,256,0.3)"
  },
  lists:{
    marginTop:"20px"
  }
})

export const LeftDrawer = () => {
  const classes = useStyles()

  const [listItems, setListItems] = useState([{itemText:"Home Page", itemType:"Button"}])

  return (
    <Drawer
      variant="permanent"
      classes={{ paper: classes.paper }}
    >
      <div className={classes.lists}>
        <Divider classes={{root: classes.divider}} variant="middle"/>
        
        <ItemList listTitle={"Home"} listItems={listItems}/>
      </div>
    </Drawer>
  )
}
