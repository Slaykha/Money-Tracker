import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { Boxes } from './Boxes'
import { GraphBoxes } from './GraphBoxes'
import { connect } from 'react-redux'
import { fetchSpendings } from '../../actions/spendingAction'

const useStyles = makeStyles(() =>({
    homeHeader:{
        background:"linear-gradient(to right, #0048B2 ,#3B8AFF, #0048B2)",
        width:"calc(100% - 250px)",
        height:200,
        position:"absolute",
        marginTop:"-40px"
    },
    headerTitle:{
        color:"white",
        position:"absolute",
        fontSize:28,
        top:30,
        left:30
    },
    headerText:{
        color:"white",
        position:"absolute",
        fontSize:18,
        top:75,
        left:30
    },
    
}))

const HomePage = (props) => {
    const classes = useStyles()

    const {
        user, 
        spendings, 
        todaysTotal,        
        fetchSpendings
    } = props 

    const [boxElements, setBoxElements] = useState([{icon:"", title:"", content:""}])
    const [graphBoxes, setGraphBoxes] = useState([{title:"Bar Chart", content:"bar",}, {title:"Pie Chart", content:"pie",}, {title:"Coming Soon", content:"cSoon",}])
    const [totalSpendings, setTotalSpendings] = useState(0)

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

    useEffect(() => {
        let total = calculateTotalSpending()
        if(totalSpendings !== total){
            setTotalSpendings(total)
        }
        setBoxElements([{icon:"", title:"Total Spendings", content:`${totalSpendings}`},{icon:"", title:"Today's Total Spendings", content:`${todaysTotal}`}])
        getDataByDate("W")
    }, [spendings, totalSpendings])
    
    useEffect(() => {
        if(user && user.id !== undefined){
          fetchSpendings(user.id, "", "", "", "")
        }
        return () => {}
    }, [user])

    return (
        <div>
            <div className={classes.homeHeader}>
                <div className={classes.headerTitle}> Hello {user.name} </div>
                <div className={classes.headerText}> We are on a mission to make peoples life easier. </div>
                <Boxes boxElements={boxElements} currency={user.currency}/>
                <GraphBoxes 
                    boxType={"fullBox"} 
                    spendings={spendings} 
                    totalSpendings={totalSpendings} 
                    currency={user.currency} 
                    data={data} 
                    getDataByDate={getDataByDate}
                />
                <GraphBoxes 
                    boxType={"multipleBox"} 
                    boxes={graphBoxes} 
                    data={data} 
                    currency={user.currency} 
                    getDataByDate={getDataByDate}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    spendings : state.spendings,
    todaysTotal: state.todaysTotal
});
  
const mapDispatchToProps = (dispatch) => ({
    fetchSpendings: (userId, date, type, moneySort, dateSort) => {
        dispatch(fetchSpendings(userId, date, type, moneySort, dateSort))
    },
});

export default connect(mapStateToProps,mapDispatchToProps) (HomePage);
