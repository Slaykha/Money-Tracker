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
    const [graphBoxes, setGraphBoxes] = useState([{title:"Bar Chart", content:"bar",}, {title:"Pie Chart", content:"pie",}, {title:"deneme3", content:"",}])
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
            const weeklyData = [{name:"Monday", spending:0, fill: '#1A75FF'}, {name:"Tuesday", spending:0, fill: '#1A75FF'}, {name:"Wednesday", spending:0, fill: '#1A75FF'}, {name:"Thursday", spending:0, fill: '#1A75FF'}, {name:"Friday", spending:0, fill: '#1A75FF'}, {name:"Saturday", spending:0, fill: '#1A75FF'}, {name:"Sunday", spending:0, fill: '#1A75FF'}]
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
            const monthlyData = [{name:"January", spending:0}, {name:"February", spending:0}, {name:"March", spending:0}, {name:"April", spending:0}, {name:"May", spending:0}, {name:"June", spending:0}, {name:"July", spending:0}, {name:"August", spending:0}, {name:"September", spending:0}, {name:"October", spending:0}, {name:"November", spending:0}, {name:"December", spending:0}]
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
            const yearlyData = [{name:"2014", spending:0}, {name:"2015", spending:0}, {name:"2016", spending:0}, {name:"2017", spending:0}, {name:"2018", spending:0}, {name:"2019", spending:0}, {name:"2020", spending:0}, {name:"2021", spending:0}, {name:"2022", spending:0}, {name:"2023", spending:0}]
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

    useEffect(() => {
        let total = calculateTotalSpending()
        if(totalSpendings !== total){
            setTotalSpendings(total)
        }
        setBoxElements([{icon:"", title:"Total Spendings", content:`${totalSpendings}`},{icon:"", title:"Today's Total Spendings", content:`${todaysTotal}`}])
        getDataByDate("W")
    }, [spendings, totalSpendings])
    
    useEffect(() => {
        if(user && user.id !== ""){
          fetchSpendings(user.id, "", "")
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
    fetchSpendings: (userId, date, type) => {
        dispatch(fetchSpendings(userId, date, type))
    },
});

export default connect(mapStateToProps,mapDispatchToProps) (HomePage);
