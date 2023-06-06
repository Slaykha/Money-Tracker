import { makeStyles } from '@mui/styles'
import React from 'react'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const useStyles = makeStyles(()=>({
    graphPlaceHolder:{
        fontSize:"36px",
        display:"block",
        textAlign:"center",
        marginTop:"8%",
        marginBottom:"5%",
        color:"whitesmoke"
    },
}))

const LineGraph = ({data, isPage}) => {
    const classes = useStyles()

    return (
        <>
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
                        {isPage && 
                            <Legend
                                iconType='circle'
                                iconSize={8} 
                                wrapperStyle={{
                                    top: '103%',
                                }} 
                            />    
                        }
                        <Line type="linear" dataKey="spending" stroke="#1A75FF" name="Spending" activeDot={{ r: 6 }} strokeWidth={2}/>
                    </LineChart>
                </ResponsiveContainer>
            :
                <div className={classes.graphPlaceHolder}>
                    No Records To Display!
                </div>
            }
        </>
    )
}

export default LineGraph