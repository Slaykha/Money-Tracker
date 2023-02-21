import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { Boxes } from './Boxes'

const useStyles = makeStyles(() =>({
    homeHeader:{
      background:"linear-gradient(to right, #0048B2 ,#3B8AFF, #0048B2)",
      width:"calc(100% - 250px)",
      height:300,
      position:"absolute",
    },
    headerTitle:{
        color:"white",
        position:"absolute",
        fontSize:28,
        top:80,
        left:30
    },
    headerText:{
        color:"white",
        position:"absolute",
        fontSize:18,
        top:125,
        left:30
    }
}))

export const HomePage = () => {
    const classes = useStyles()

    const [boxElements, setBoxElements] = useState([{icon:"", title:"Total Spendings", content:"₺5.514,52"},])

    return (
        <div>
            <div className={classes.homeHeader}>
                <div className={classes.headerTitle}> Hello Kadir! </div>
                <div className={classes.headerText}> We are on a mission to make peoples life easier. </div>
                <Boxes boxElements={boxElements}/>
                
            </div>
        </div>
    )
}
