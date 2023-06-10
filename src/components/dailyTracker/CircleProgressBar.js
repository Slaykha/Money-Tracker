import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles((theme) => ({
    progressBar:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        width: "300px",
        height: "300px",
        borderRadius: "100%",
        border: "4px solid #D7DBDD ",
        transition: "--p 0.5s,--l 0.5s,--a 0.5s"
    },
    innerCircle:{
        width: "200px",
        height: "200px",
        borderRadius: "100%",
        border: "4px solid #D7DBDD ",
        backgroundColor: "#17202A",
    },
    text:{
        color: "white",
        fontSize: "24px"
    },
    textAlign:{
        display: "flex",
        marginTop:"30%",
        justifyContent: "center",
        alignItems: "center",
    },
    percentageAlign:{
        display: "flex",
        marginTop:"10%",
        justifyContent: "center",
        alignItems: "center",
    }
}));

const CircleProgressBar = ({todaysTotal, dailyLimit, currency}) => {
    const classes = useStyles()

    const [percentage, setPrecentage] = useState(0)

    const percentageCalculator = () => {
        setPrecentage((todaysTotal / dailyLimit) * 100 * 3.6)
    };

    useEffect(() => {
        percentageCalculator()
    }, [todaysTotal])
    
    return (
        <div 
            className={classes.progressBar}
            style={{background: `conic-gradient(from 0deg, green 0deg ${percentage}deg, greenyellow ${percentage}deg ${360 - percentage}deg)`}}  
        >
            <div className={classes.innerCircle}>
                <div className={classes.text}>     
                    <div className={classes.textAlign}>
                        {percentage < 360  ? (100 - (percentage / 3.6)).toFixed(2) : "00.00"}%
                    </div>
                    <div className={classes.percentageAlign}>
                        {parseFloat(todaysTotal).toFixed(2)} {currency}  / {dailyLimit} {currency}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CircleProgressBar