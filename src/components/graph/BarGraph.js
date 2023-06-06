import { makeStyles } from '@mui/styles'
import React from 'react'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

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

const BarGraph = ({data, isPage}) => {
    const classes = useStyles()

    return (
        <>
            {data && data.length != 0
            ?
                <ResponsiveContainer width="98%" height={isPage ? "85%" : "95%"}>
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
                        <Tooltip cursor={{ stroke: '#ED9121', strokeWidth: 1 }} />
                        <Bar dataKey="spending" fill="#1A75FF" />
                    </BarChart>
                </ResponsiveContainer>
            :
                <div className={classes.graphPlaceHolder}>
                    No Records To Display!
                </div>
            }
        </>
    )
}

export default BarGraph