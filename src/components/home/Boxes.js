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
    },
    boxTextPlaceHolder:{
        marginTop:"20px",
        height: "20px",
        width:"150px",
        background:"linear-gradient(to right, rgb(211,211,211, 0.1) 0%, rgb(211,211,211, 0.4) 4%, rgb(211,211,211, 0.1) 8%)",
        backgroundSize: "200% 100%",
        borderRadius:"20px",
        animation: `$scanner 0.9s linear infinite`,
    },
    smallPlaceHolder:{
        marginTop:"20px",
        marginRight:"5px",
        height: "20px",
        width:"30px",
        background:"linear-gradient(to right, rgb(211,211,211, 0.1) 0%, rgb(211,211,211, 0.4) 8%, rgb(211,211,211, 0.1) 16%)",
        backgroundSize: "200% 100%",
        borderRadius:"20px",
        animation: `$scanner 0.9s linear infinite`,
    },
    contentPlaceHoler:{
        display:"flex"
    },
    '@keyframes scanner': {
        "0%": { backgroundPosition: "200% 0%" },
    },
}))

export const Boxes = (props) => {
    const {
        boxElements,
        currency
    } = props;
    const classes = useStyles()

    return (
        <div className={classes.Boxes}>
            {boxElements && boxElements.map((box) => (
                <>
                    {box.title && box.content && currency 
                    ?
                        <div className={classes.Box}>
                            <div className={classes.boxText}>{box.title} </div>
                            <div className={classes.boxText}>{currency}{box.content}</div>
                        </div>
                    :
                        <div className={classes.Box}>
                            <div className={classes.boxTextPlaceHolder}/>
                            <div className={classes.contentPlaceHoler}>
                                <div className={classes.smallPlaceHolder}/>
                                <div className={classes.boxTextPlaceHolder} style={{width:"70px"}}/>
                            </div>
                        </div>
                    }
                </>
            ))}
        </div>
    )
}
