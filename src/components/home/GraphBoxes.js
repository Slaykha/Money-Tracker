import { FormControl, IconButton,NativeSelect } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system';
import React from 'react'
import LineGraph from '../graph/LineGraph';
import BarGraph from '../graph/BarGraph';
import RadialBarGraph from '../graph/RadialBarGraph';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() =>({
    fullBox:{
        width:"95%",
        background:"#1A1A1A",
        height:"170%",
        borderRadius:"10px",
        margin:"3%",
        marginTop:"1%",
        marginBottom:"1%",
        position: 'relative'
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
        float:"left",
        position: 'relative'
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
    },
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

    const navigate = useNavigate()

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

    const onExpandClick = (type) => {
        navigate(`/${type}`)
    }

    const getDataTotalSpending = () => {
        let total = 0
        data.map(d => {
            total += d.spending
        })

        return total
    }


    return (
        <>
            {boxType === "fullBox" ?
                <div className={classes.fullBox}>
                    <IconButton
                        onClick={() => onExpandClick("lineGraph")}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}
                    >
                        <OpenInFullIcon style={{color:"whitesmoke"}}/>
                    </IconButton>
                    <div className={classes.GraphsTop}>
                        {currency && totalSpendings
                        ?
                            <div className={classes.TotalSpending}>
                                <div className={classes.TotalSpendingValue}>{currency}{getDataTotalSpending()}</div>
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
                    <LineGraph data={data} />
                </div>
                :
                <>
                    {boxes && boxes.map((box, index) => (
                        <div 
                            className={classes.multipleBox}
                            style={{width:`${88 / boxNumber}%`}}
                        >
                            <IconButton
                                onClick={() => {box.content === "bar" ?  onExpandClick("barGraph") : onExpandClick("radialBarGraph")}}
                                sx={{
                                    position: 'absolute',
                                    right: 4,
                                    top: 4,
                                    zIndex: 1
                                }}
                                disabled={box.content === "cSoon"}
                            >
                                <OpenInFullIcon fontSize='small' style={{color:"whitesmoke"}}/>
                            </IconButton>

                            {box.content === "bar" ?
                                <BarGraph data={data}/>
                            :
                                box.content === "pie" ?
                                    <RadialBarGraph data={data}/>
                                :
                                <div style={{marginTop:"25%"}} className={classes.graphPlaceHolder}>
                                    Coming Soon
                                </div>
                            }
                        </div>
                    ))}
                </>
            }
        </> 
    )
}
