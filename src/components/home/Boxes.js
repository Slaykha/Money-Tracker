import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles(() =>({
    Boxes:{
        marginLeft:"3%",
        display:"flex"
    },
    Box:{
      background:"#1A1A1A",
      width:200,
      height:120,
      borderRadius:10,
      color:"#D3D3D3",
      marginTop:"150px",
      paddingLeft:"35px",
      marginRight:"4%"
    },
    boxText: {
      paddingTop:"20px"
    }
}))

export const Boxes = (props) => {
    const {
        boxElements
    } = props;
    const classes = useStyles()

    return (
        <div className={classes.Boxes}>
            {boxElements && boxElements.map((box) => (
                <div className={classes.Box}>
                    <div className={classes.boxText}>{box.title} </div>
                    <div className={classes.boxText}>{box.content}</div>
                </div>
            ))}
        </div>
    )
}
