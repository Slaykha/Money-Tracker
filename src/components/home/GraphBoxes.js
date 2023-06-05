import { FormControl, InputLabel, MenuItem, NativeSelect, Select } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar, RadialBarChart, RadialBar } from 'recharts';

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
    },
    largePlaceHolder:{
        marginTop:"10px",
        height: "20px",
        width:"70px",
        background:"linear-gradient(to right, rgb(211,211,211, 0.1) 0%, rgb(211,211,211, 0.4) 4%, rgb(211,211,211, 0.1) 8%)",
        backgroundSize: "200% 100%",
        borderRadius:"20px",
        animation: `$scanner 0.9s linear infinite`,
    },
    smallPlaceHolder:{
        marginTop:"10px",
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
    graphPlaceHolder:{
        fontSize:"36px",
        display:"block",
        textAlign:"center",
        marginTop:"8%",
        marginBottom:"5%",
        color:"whitesmoke"
    },
    graphPlaceHolderMultiBox:{
        fontSize:"24px",
        display:"block",
        textAlign:"center",
        marginTop:"25%",
        color:"whiteSmoke"
    }
}))

export const GraphBoxes = (props) => {
    const {
        boxType,
        boxes,
        spendings,
        totalSpendings,
        currency,
        data,
        getDataByDate
    } = props;
    const classes = useStyles()

    const boxNumber = boxes && boxes.length

    const handleChange = (e) => {
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
                        {currency && totalSpendings
                        ?
                            <div className={classes.TotalSpending}>
                                <div className={classes.TotalSpendingValue}>{currency}{totalSpendings}</div>
                                <div className={classes.TotalSpendingText}>Spending</div>
                            </div>
                        :
                            <div className={classes.TotalSpending}> 
                                <div className={classes.contentPlaceHoler}>
                                    <div className={classes.smallPlaceHolder}/>
                                    <div className={classes.largePlaceHolder}/>
                                </div>
                            </div>
                        }
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
                    {data && data.length != 0
                    ?
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
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip cursor={{ stroke: '#ED9121', strokeWidth: 1 }} />
                                <Line type="linear" dataKey="spending" stroke="#1A75FF" name="Spending" activeDot={{ r: 6 }} strokeWidth={2}/>
                            </LineChart>
                        </ResponsiveContainer>
                    :
                        <div className={classes.graphPlaceHolder}>
                            No Records To Display!
                        </div>
                    }
                </div>
                :
                <>
                    {
                        boxes && boxes.map((box, index) => (
                            <div 
                                className={classes.multipleBox}
                                style={{width:`${88 / boxNumber}%`}}
                            >
                                {
                                    data && data.length != 0
                                    ?
                                    
                                        box.content === "bar" ?
                                            <ResponsiveContainer width="98%" height="95%">
                                                <BarChart 
                                                    margin={{
                                                        top: 30,
                                                        right: 30,
                                                        left: 20,
                                                        bottom: 5,
                                                    }} 
                                                    data={data}
                                                >
                                                    
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Bar dataKey="spending" fill="#1A75FF" />
                                                </BarChart>
                                            </ResponsiveContainer>
              
                                        :
                                            <ResponsiveContainer width="90%" height="100%">
                                                <RadialBarChart 
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius="10%" 
                                                    outerRadius="90%" 
                                                    data={data} 
                                                    startAngle={0} 
                                                    endAngle={360}
                                                >
                                                    <RadialBar minAngle={15} background clockWise={true} dataKey='spending' nameKey="name" />
                                                    <Legend 
                                                        iconSize={10} 
                                                        layout="vertical" 
                                                        verticalAlign="middle" 
                                                        wrapperStyle={{
                                                            top: '50%',
                                                            right: -40,
                                                            transform: 'translate(0, -50%)',
                                                            lineHeight: '24px'
                                                        }} 
                                                    />
                                                    <Tooltip cursor={{ stroke: '#ED9121', strokeWidth: 1 }} />
                                                </RadialBarChart>
                                            </ResponsiveContainer>
                                    :
                                        <div className={classes.graphPlaceHolderMultiBox}>
                                            No Records To Display!
                                        </div>
                                }
                            </div>
                        ))
                    }
                </>
            }
        </> 
    )
}
