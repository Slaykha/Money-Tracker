import React, { useEffect, useState } from 'react'

const CircleProgressBar = ({todaysTotal, dailyLimit, currency}) => {

    const [percentage, setPrecentage] = useState(0)

    const percentageCalculator = () => {
        setPrecentage((todaysTotal / dailyLimit) * 100 * 3.6)
    };

    useEffect(() => {
        if(todaysTotal)
            percentageCalculator()
    }, [todaysTotal])
    
    console.log(percentage)

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                width: "300px",
                height: "300px",
                borderRadius: "100%",
                border: "4px solid #D7DBDD ",
                background: `conic-gradient(from 0deg, green 0deg ${percentage}deg, greenyellow ${percentage}deg ${360 - percentage}deg)`,
                transition: "--p 0.5s,--l 0.5s,--a 0.5s"
            }}
        >
            <div
                style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "100%",
                    border: "4px solid #D7DBDD ",
                    backgroundColor: "#17202A",
                }}
            >
                <div
                    style={{
                        color: "white",
                        fontSize: "24px"
                    }}
                >     
                    <div
                        style={{
                            display: "flex",
                            marginTop:"30%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {percentage < 360  ? (100 - (percentage / 3.6)).toFixed(2) : "00.00"}%
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop:"10%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {parseFloat(todaysTotal).toFixed(2)} {currency}  / {dailyLimit} {currency}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CircleProgressBar