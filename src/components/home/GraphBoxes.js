import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
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
    const [data, setData] = useState()

    useEffect(() => {
      if(!data){
        getDataByDate("W")
      }
    }, [])
    

    const calculateTotalSpending = () =>{
        let total = 0
        Object.keys(spendings).length !== 0 && spendings.map((spending) => 
            total += spending.money
        )

        return total
    }

    const getDataByDate = (interval) => {
        if(interval === "W"){
            const weeklyData = [{Xaxis:"Monday", spending:0}, {Xaxis:"Tuesday", spending:0}, {Xaxis:"Wednesday", spending:0}, {Xaxis:"Thursday", spending:0}, {Xaxis:"Friday", spending:0}, {Xaxis:"Saturday", spending:0}, {Xaxis:"Sunday", spending:0}]
            spendings && Object.keys(spendings).length !== 0 && spendings.map((spending) => {
                let spendingDate = new Date(spending.spendingDate)
                let limitDate = new Date(new Date(new Date()).setDate(new Date().getDate() - 7))
                if(spendingDate > limitDate){
                    switch (spendingDate.getDay()) {
                        case 0:
                            weeklyData[6].spending += spending.money
                            weeklyData[6].Xaxis = spendingDate.toLocaleString('en-us', {  weekday: 'long' })
                            break;
                        case 1:
                            weeklyData[0].spending += spending.money
                            weeklyData[0].Xaxis = spendingDate.toLocaleString('en-us', {  weekday: 'long' })
                            break;
                        case 2:
                            weeklyData[1].spending += spending.money
                            weeklyData[1].Xaxis = spendingDate.toLocaleString('en-us', {  weekday: 'long' })

                            break;
                        case 3:
                            weeklyData[2].spending += spending.money
                            weeklyData[2].Xaxis = spendingDate.toLocaleString('en-us', {  weekday: 'long' })

                            break;
                        case 4:
                            weeklyData[3].spending += spending.money
                            weeklyData[3].Xaxis = spendingDate.toLocaleString('en-us', {  weekday: 'long' })

                            break;
                        case 5:
                            weeklyData[4].spending += spending.money
                            weeklyData[4].Xaxis = spendingDate.toLocaleString('en-us', {  weekday: 'long' })

                            break;
                        case 6:
                            weeklyData[5].spending += spending.money
                            weeklyData[5].Xaxis = spendingDate.toLocaleString('en-us', {  weekday: 'long' })

                            break;
                        default:
                            break;
                    }
                }
            })
            setData(weeklyData)
        }
        else if(interval === "Y"){
            const yearlyData = [{Xaxis:"January", spending:0}, {Xaxis:"February", spending:0}, {Xaxis:"March", spending:0}, {Xaxis:"April", spending:0}, {Xaxis:"May", spending:0}, {Xaxis:"June", spending:0}, {Xaxis:"July", spending:0}, {Xaxis:"August", spending:0}, {Xaxis:"September", spending:0}, {Xaxis:"October", spending:0}, {Xaxis:"November", spending:0}, {Xaxis:"December", spending:0}]
            spendings && Object.keys(spendings).length !== 0 && spendings.map((spending) => {
                let spendingDate = new Date(spending.spendingDate)
                let limitDate = new Date(new Date(new Date()).setDate(new Date().getDate()))
                if(spendingDate.getFullYear() === limitDate.getFullYear()){
                    switch (spendingDate.getMonth()) {
                        case 0:
                            yearlyData[0].spending += spending.money
                            break;
                        case 1:
                            yearlyData[1].spending += spending.money
                            break;
                        case 2:
                            yearlyData[2].spending += spending.money
                            break;
                        case 3:
                            yearlyData[3].spending += spending.money
                            break;
                        case 4:
                            yearlyData[4].spending += spending.money
                            break;
                        case 5:
                            yearlyData[5].spending += spending.money
                            break;
                        case 6:
                            yearlyData[6].spending += spending.money
                            break;
                        case 7:
                            yearlyData[7].spending += spending.money
                            break;
                        case 8:
                            yearlyData[8].spending += spending.money
                            break;
                        case 9:
                            yearlyData[9].spending += spending.money
                            break;
                        case 10:
                            yearlyData[10].spending += spending.money
                            break;
                        case 11:
                            yearlyData[11].spending += spending.money
                            break;
                        default:
                            break;
                    }
                }
            })
            setData(yearlyData)
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
                getDataByDate(e.target.value)
                break;
            default:
                break;
        }
    }

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
                            
                            <XAxis dataKey="Xaxis" />
                            <YAxis />
                            <Tooltip  />
                            <Line type="linear" dataKey="spending" stroke="#1A75FF" name="Spending"/>
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
