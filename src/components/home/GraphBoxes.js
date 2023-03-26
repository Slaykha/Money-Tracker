import { FormControl, InputLabel, MenuItem, NativeSelect, Select } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system';
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
        paddingTop:"0.5%"
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
        spendings,
        totalSpendings
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
        else if(interval === "M"){
            const monthlyData = [{Xaxis:"January", spending:0}, {Xaxis:"February", spending:0}, {Xaxis:"March", spending:0}, {Xaxis:"April", spending:0}, {Xaxis:"May", spending:0}, {Xaxis:"June", spending:0}, {Xaxis:"July", spending:0}, {Xaxis:"August", spending:0}, {Xaxis:"September", spending:0}, {Xaxis:"October", spending:0}, {Xaxis:"November", spending:0}, {Xaxis:"December", spending:0}]
            spendings && Object.keys(spendings).length !== 0 && spendings.map((spending) => {
                let spendingDate = new Date(spending.spendingDate)
                let limitDate = new Date(new Date(new Date()).setDate(new Date().getDate()))
                if(spendingDate.getFullYear() === limitDate.getFullYear()){
                    switch (spendingDate.getMonth()) {
                        case 0:
                            monthlyData[0].spending += spending.money
                            break;
                        case 1:
                            monthlyData[1].spending += spending.money
                            break;
                        case 2:
                            monthlyData[2].spending += spending.money
                            break;
                        case 3:
                            monthlyData[3].spending += spending.money
                            break;
                        case 4:
                            monthlyData[4].spending += spending.money
                            break;
                        case 5:
                            monthlyData[5].spending += spending.money
                            break;
                        case 6:
                            monthlyData[6].spending += spending.money
                            break;
                        case 7:
                            monthlyData[7].spending += spending.money
                            break;
                        case 8:
                            monthlyData[8].spending += spending.money
                            break;
                        case 9:
                            monthlyData[9].spending += spending.money
                            break;
                        case 10:
                            monthlyData[10].spending += spending.money
                            break;
                        case 11:
                            monthlyData[11].spending += spending.money
                            break;
                        default:
                            break;
                    }
                }
            })
            setData(monthlyData)
        }else if(interval === "Y"){
            const yearlyData = [{Xaxis:"2014", spending:0}, {Xaxis:"2015", spending:0}, {Xaxis:"2016", spending:0}, {Xaxis:"2017", spending:0}, {Xaxis:"2018", spending:0}, {Xaxis:"2019", spending:0}, {Xaxis:"2020", spending:0}, {Xaxis:"2021", spending:0}, {Xaxis:"2022", spending:0}, {Xaxis:"2023", spending:0}]
            spendings && Object.keys(spendings).length !== 0 && spendings.map((spending) => {
                let spendingDate = new Date(spending.spendingDate)
                let limitDate = new Date(new Date(new Date()).setDate(new Date().getDate()))
                if(spendingDate.getFullYear() > limitDate.getFullYear() - 10){
                    switch (spendingDate.getFullYear()) {
                        case 2014:
                            yearlyData[0].spending += spending.money
                            break;
                        case 2015:
                            yearlyData[1].spending += spending.money
                            break;
                        case 2016:
                            yearlyData[2].spending += spending.money
                            break;
                        case 2017:
                            yearlyData[3].spending += spending.money
                            break;
                        case 2018:
                            yearlyData[4].spending += spending.money
                            break;
                        case 2019:
                            yearlyData[5].spending += spending.money
                            break;
                        case 2020:
                            yearlyData[6].spending += spending.money
                            break;
                        case 2021:
                            yearlyData[7].spending += spending.money
                            break;
                        case 2022:
                            yearlyData[8].spending += spending.money
                            break;
                        case 2023:
                            yearlyData[9].spending += spending.money
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
                getDataByDate(e.target.value)
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
                            <div className={classes.TotalSpendingValue}>₺{totalSpendings}</div>
                            <div className={classes.TotalSpendingText}>Spending</div>
                        </div>
                        <div className={classes.Legend}>
                            ● Spendings
                        </div>
                        <div className={classes.Selector}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <NativeSelect
                                defaultValue={"W"}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                                onChange={handleChange}
                                sx={{
                                    color: "white",
                                    '.MuiOutlinedInput-notchedOutline': {
                                      borderColor: 'whiteSmoke',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                      borderColor: 'white',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                      borderColor: 'white',
                                    },
                                    '.MuiSvgIcon-root ': {
                                      fill: "white !important",
                                    },
                                  }}
                                >
                                <option value={"W"}>Weekly</option>
                                <option value={"M"}>Mountly</option>
                                <option value={"Y"}>Yearly</option>
                                </NativeSelect>
                            </FormControl>
                        </Box>                      
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
                            <Tooltip cursor={{ stroke: '#ED9121', strokeWidth: 1 }} />
                            <Line type="linear" dataKey="spending" stroke="#1A75FF" name="Spending" activeDot={{ r: 6 }} strokeWidth={2}/>
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
