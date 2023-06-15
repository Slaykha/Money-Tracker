import { makeStyles } from '@mui/styles'
import React from 'react'
import { Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from 'recharts'

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

const RadialBarGraph = ({data, isPage}) => {
    const classes = useStyles()

    return (
        <>
            {data && data.length != 0
            ?
                <ResponsiveContainer width="90%" height={isPage ? "85%" : "95%"}>
                    <RadialBarChart 
                        cx="40%"
                        cy="50%"
                        innerRadius="10%" 
                        outerRadius="90%" 
                        data={data} 
                        startAngle={0} 
                        endAngle={360}
                    >
                        <RadialBar minAngle={15} background clockWise={true} dataKey='spending' nameKey="name" />
                        <Legend 
                            iconType='circle'
                            iconSize={8} 
                            layout="vertical" 
                            verticalAlign="middle" 
                            wrapperStyle={{
                                top: '50%',
                                right: -40,
                                transform: 'translate(0, -50%)',
                                lineHeight: isPage ? "36px" : '16px',
                                fontSize: isPage ? "32px" : "14px"
                            }} 
                        />
                        <Tooltip cursor={{ stroke: '#ED9121', strokeWidth: 1 }} />
                    </RadialBarChart>
                </ResponsiveContainer>
            :
                <div className={classes.graphPlaceHolder}>
                    No Records To Display!
                </div>
            }
        </>
    )
}

export default RadialBarGraph