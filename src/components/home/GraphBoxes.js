import { makeStyles } from '@mui/styles'
import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const useStyles = makeStyles(() =>({
    fullBox:{
        width:"95%",
        background:"#1A1A1A",
        height:"170%",
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
        boxes,
        spendings
    } = props;
    const classes = useStyles()

    const boxNumber = boxes && boxes.length

    const calculateTotalSpending = () =>{
        let total
        spendings.length !== 0 && spendings.map((spending) => 
            total += spending.money
        )

        return total
    }

    return (
        <>
            {boxType === "fullBox" ?
                <div className={classes.fullBox}>
                    <div>
                        <div>{calculateTotalSpending}</div>
                    </div>
                    
                        <ResponsiveContainer width="100%" height="90%">
                        <LineChart
                            data={spendings}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            
                            <XAxis dataKey="spendingType" />
                            <YAxis />
                            <Tooltip  />
                            <Line type="linear" dataKey="money" stroke="#1A75FF" name="Spending"/>
                        </LineChart>
                    </ResponsiveContainer>
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
