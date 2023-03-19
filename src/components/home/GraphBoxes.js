import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles(() =>({
    fullBox:{
        width:"95%",
        background:"#1A1A1A",
        height:"120%",
        borderRadius:"10px",
        margin:"3%",
        marginTop:"1%",
        marginBottom:"1%"
    },
    multipleBoxContainer:{
        display:"flex",
        width:"100%"
    },
    multipleBox:{
        background:"#1A1A1A",
        height:"140%",
        borderRadius:"10px",
        marginLeft:"3%",
        margin:"0.5%",
        float:"left"
    }
}))

export const GraphBoxes = (props) => {
    const {
        boxType,
        boxes
    } = props;
    const classes = useStyles()

    const boxNumber = boxes && boxes.length
    

    return (
        <>
            {boxType === "fullBox" ?
                <div className={classes.fullBox}>

                </div>
                :
                <>
                    {
                        boxes && boxes.map((boxContent, index) => (
                            <div 
                                className={classes.multipleBox}
                                style={{width:`${88 / boxNumber}%`}}
                            >
                                <div>
                                    
                                </div>
                                <div>

                                </div>
                            </div>
                        ))
                    }
                </>
            }
        </> 
    )
}
