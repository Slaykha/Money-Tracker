import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
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
    },
    GraphsTop:{
        display:"flex",
        paddingTop:"2%"
    },
    TotalSpending:{
        display:"block",
        marginRight:"auto",
        marginLeft:"25%"
    },
    TotalSpendingText:{
        color:"#D3D3D3",
        fontSize:"13px",
        marginTop:"2px"
    },
    TotalSpendingValue:{
        color:"#D3D3D3",
    },
    Legend:{
        color:"#1A75FF",
    },
    Selector:{
        color:"#D3D3D3",
        marginLeft:"auto",
        marginRight:"25%"

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
    const [dataTime, setDataTime] = useState("W")
    const [data, setData] = useState({})

    const calculateTotalSpending = () =>{
        let total = 0
        Object.keys(spendings).length !== 0 && spendings.map((spending) => 
            total += spending.money
        )

        return total
    }

    const getDataByDate = (interval) => {
        if(interval === "W"){
            const weeklyData = {"monday":0, "tuesday":0, "wendsday":0, "thursday":0, "friday":0, "saturday":0, "sunday":0}
            Object.keys(spendings).length !== 0 && spendings.map((spending) => {
                let spendingDate = new Date(spending.spendingDate)
                if(spendingDate.getDate() < new Date(new Date(new Date()).setDate(new Date().getDate() - 7))){
                    switch (spendingDate.getDay()) {
                        case 0:
                            weeklyData.sunday += spending.money
                            break;
                        case 1:
                            weeklyData.monday += spending.money
                            break;
                        case 2:
                            weeklyData.tuesday += spending.money
                            break;
                        case 3:
                            weeklyData.wendsday += spending.money
                            break;
                        case 4:
                            weeklyData.thursday += spending.money
                            break;
                        case 5:
                            weeklyData.friday += spending.money
                            break;
                        case 6:
                            weeklyData.saturday += spending.money
                            break;
                        default:
                            break;
                    }
                }
            })
            setData(weeklyData)
        }
    }

    const handleChange = (e) => {
        setDataTime(e.target.value)
        switch (e.target.value) {
            case "W":
                getDataByDate(e.target.value)
                break;
            case "M":
            
                break;
            case "Y":
            
                break;
            default:
                break;
        }
    }

    console.log(data)
    return (
        <>
            {boxType === "fullBox" ?
                <div className={classes.fullBox}>
                    <div className={classes.GraphsTop}>
                        <div className={classes.TotalSpending}>
                            <div className={classes.TotalSpendingValue}>₺{calculateTotalSpending()}</div>
                            <div className={classes.TotalSpendingText}>Spending</div>
                        </div>
                        <div className={classes.Legend}>
                            ● Spendings
                        </div>
                        <div className={classes.Selector}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={dataTime}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"W"}>This Week</MenuItem>
                                    <MenuItem value={"M"}>This Month</MenuItem>
                                    <MenuItem value={"Y"}>This Year</MenuItem>
                                </Select>
                            </FormControl>                        
                        </div>
                    </div>
                    
                        <ResponsiveContainer width="98%" height="80%">
                        <LineChart
                            data={data}
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
                            <Line type="linear" dataKey="sunday" stroke="#1A75FF" name="Spending"/>
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
