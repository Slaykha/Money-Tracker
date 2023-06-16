import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Header } from "../header/Header";
import { Menu } from "../sideMenu/Menu";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, FormControl, NativeSelect } from "@mui/material";
import { fetchSpendings } from "../../actions/spendingAction";

const useStyles = makeStyles({
    bodyComponent:{
        marginLeft:"250px", 
        marginTop:"120px",
    },
    Box:{
        width:"95%",
        background:"#1A1A1A",
        height:"750px",
        borderRadius:"10px",
        margin:"3%",
        marginTop:"1%",
        marginBottom:"1%"
    },
    GraphsTop:{
        display:"flex",
        paddingTop:"2%"
    },
    TotalSpending:{
        display:"block",
        marginRight:"auto",
        marginLeft:"33.3%"
    },
    TotalSpendingText:{
        color:"#D3D3D3",
        fontSize:"18px",
        marginTop:"2px"
    },
    TotalSpendingValue:{
        color:"#D3D3D3",
        fontSize:"18px",
    },
    Legend:{
        color:"#1A75FF",
        paddingTop:"0.5%",
        fontSize:"18px",
    },
    Selector:{
        color:"#D3D3D3",
        marginLeft:"auto",
        marginRight:"33.3%"
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
});

function GraphPage(props) {
  const classes = useStyles();

  const {
    user,
    isLoggedIn,
    spendings,
    fetchSpendings,
    setIsLoggedIn
  } = props

  const PageComponent = props.component;

  const navigate = useNavigate()

  const [data, setData] = useState()

  const calculateTotalSpending = () =>{
    let total = 0
    spendings !== null && Object.keys(spendings).length !== 0 && spendings.map((spending) => 
        total += spending.money
    )

    return total.toFixed(2)
}

    const getDataByDate = (interval) => {
        if(interval === "W"){
            const weeklyData = [{name:"Monday", spending:0, fill: '#1A75FF'}, {name:"Tuesday", spending:0, fill: '#8dd1e1'}, {name:"Wednesday", spending:0, fill: '#82ca9d'}, {name:"Thursday", spending:0, fill: '#a4de6c'}, {name:"Friday", spending:0, fill: '#d0ed57'}, {name:"Saturday", spending:0, fill: '#ffc658'}, {name:"Sunday", spending:0, fill: '#ff4a4a'}]
            spendings && Object.keys(spendings).length !== 0 && spendings.map((spending) => {
                let spendingDate = new Date(spending.spendingDate)
                let today = new Date().getDay()
                let limitDate
                if(today === 0){
                    limitDate = new Date(new Date(new Date()).setDate(new Date().getDate() - 7))
                }else{
                    limitDate = new Date(new Date(new Date()).setDate(new Date().getDate() - today))
                }
        
                if(spendingDate.setHours(0,0,0,0) > limitDate.setHours(0,0,0,0)){
                    switch (spendingDate.getDay()) {
                        case 0:
                            weeklyData[6].spending += spending.money
                            weeklyData[6].name = spendingDate.toLocaleString('en-us', {  weekday: 'long' })
                            break;
                        case 1:
                            weeklyData[0].spending += spending.money
                            weeklyData[0].name = spendingDate.toLocaleString('en-us', {  weekday: 'long' })
                            break;
                        case 2:
                            weeklyData[1].spending += spending.money
                            weeklyData[1].name = spendingDate.toLocaleString('en-us', {  weekday: 'long' })

                            break;
                        case 3:
                            weeklyData[2].spending += spending.money
                            weeklyData[2].name = spendingDate.toLocaleString('en-us', {  weekday: 'long' })

                            break;
                        case 4:
                            weeklyData[3].spending += spending.money
                            weeklyData[3].name = spendingDate.toLocaleString('en-us', {  weekday: 'long' })

                            break;
                        case 5:
                            weeklyData[4].spending += spending.money
                            weeklyData[4].name = spendingDate.toLocaleString('en-us', {  weekday: 'long' })

                            break;
                        case 6:
                            weeklyData[5].spending += spending.money
                            weeklyData[5].name = spendingDate.toLocaleString('en-us', {  weekday: 'long' })

                            break;
                        default:
                            break;
                    }
                }
            })
            setData(weeklyData)
        }
        else if(interval === "M"){
            const monthlyData = [{name:"January", spending:0, fill: '#d51aff'}, {name:"February", spending:0, fill: '#851aff'}, {name:"March", spending:0, fill: '#1A75FF'}, {name:"April", spending:0, fill: '#1a98ff'}, {name:"May", spending:0, fill: '#1ad1ff'}, {name:"June", spending:0, fill: '#1affe8'}, {name:"July", spending:0, fill: '#1aff98'}, {name:"August", spending:0, fill: '#1aff35'}, {name:"September", spending:0, fill: '#a0ff1a'}, {name:"October", spending:0, fill: '#ecff1a'}, {name:"November", spending:0, fill: '#ff9c1a'}, {name:"December", spending:0, fill: '#ff291a'}]
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
            const yearlyData = [{name:"2018", spending:0, fill: '#1A75FF'}, {name:"2019", spending:0, fill: '#8dd1e1'}, {name:"2020", spending:0, fill: '#82ca9d'}, {name:"2021", spending:0, fill: '#a4de6c'}, {name:"2022", spending:0, fill: '#d0ed57'}, {name:"2023", spending:0, fill: '#ffc658'}, {name:"2024", spending:0, fill: '#ff4a4a'}]
            spendings && Object.keys(spendings).length !== 0 && spendings.map((spending) => {
                let spendingDate = new Date(spending.spendingDate)
                let limitDate = new Date(new Date(new Date()).setDate(new Date().getDate()))
                if(spendingDate.getFullYear() > limitDate.getFullYear() - 7){
                    switch (spendingDate.getFullYear()) {
                        case 2018:
                            yearlyData[0].spending += spending.money
                            break;
                        case 2019:
                            yearlyData[1].spending += spending.money
                            break;
                        case 2020:
                            yearlyData[2].spending += spending.money
                            break;
                        case 2021:
                            yearlyData[3].spending += spending.money
                            break;
                        case 2022:
                            yearlyData[4].spending += spending.money
                            break;
                        case 2023:
                            yearlyData[5].spending += spending.money
                            break;
                        case 2024:
                            yearlyData[6].spending += spending.money
                            break;
                        default:
                            break;
                    }
                }
            })
            setData(yearlyData)
        }else if(interval === "T"){
            const typeData = [{name:"Market", spending:0, fill: '#1A75FF'}, {name:"Shopping", spending:0, fill: '#8dd1e1'}, {name:"Online Shopping", spending:0, fill: '#82ca9d'}, {name:"Restaurant", spending:0, fill: '#a4de6c'}, {name:"Food", spending:0, fill: '#d0ed57'}, {name:"Cafe", spending:0, fill: '#ffc658'}, {name:"Other", spending:0, fill: '#ff4a4a'}]
            spendings && Object.keys(spendings).length !== 0 && spendings.map((spending) => {
                switch (spending.spendingType) {
                    case "Market":
                        typeData[0].spending += spending.money
                        break;
                    case "Shopping":
                        typeData[1].spending += spending.money
                        break;
                    case "Online Shopping":
                        typeData[2].spending += spending.money
                        break;
                    case "Restaurant":
                        typeData[3].spending += spending.money
                        break;
                    case "Food":
                        typeData[4].spending += spending.money
                        break;
                    case "Cafe":
                        typeData[5].spending += spending.money
                        break;
                    case "other":
                        typeData[6].spending += spending.money
                        break;
                    default:
                        break;
                }  
            })
            setData(typeData)
        }
    }

    const handleChange = (e) => {
        if(e.target.value)
            getDataByDate(e.target.value)
    }

    useEffect(() => {
        getDataByDate("W")
        return () => {}
    }, [spendings])

    useEffect(() => {
        if(user.id){
            fetchSpendings(user.id, "", "", "", "")
        }
    }, [user])
    

    if(!isLoggedIn){
        navigate("/login")
    }

    return (
        <>
            <Header user={user} setIsLoggedIn={setIsLoggedIn}/>
            <Menu/>
            <div className={classes.bodyComponent}>
                <div className={classes.Box} >
                    <div className={classes.GraphsTop}>
                        {user && user.currency
                        ?
                            <div className={classes.TotalSpending}>
                                <div className={classes.TotalSpendingValue}>{user.currency}{calculateTotalSpending()}</div>
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
                        <div className={classes.Selector}>
                            <Box sx={{ minWidth: 150 }}>
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
                                    <option value={"T"}>By Type</option>
                                    </NativeSelect>
                                </FormControl>
                            </Box>                      
                        </div>
                    </div>

                    <PageComponent data={data} isPage={true}/>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
  user: state.user,
  spendings: state.spendings,
});

const mapDispatchToProps = (dispatch) => ({
    fetchSpendings: (userId, date, type, moneySort, dateSort) => {
        dispatch(fetchSpendings(userId, date, type, moneySort, dateSort))
    },
});


export default connect(mapStateToProps,mapDispatchToProps) (GraphPage);