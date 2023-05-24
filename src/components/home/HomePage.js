import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { Boxes } from './Boxes'
import { GraphBoxes } from './GraphBoxes'

const useStyles = makeStyles(() =>({
    homeHeader:{
        background:"linear-gradient(to right, #0048B2 ,#3B8AFF, #0048B2)",
        width:"calc(100% - 250px)",
        height:200,
        position:"absolute",
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

export const HomePage = ({user, spendings}) => {
    const classes = useStyles()

    const [boxElements, setBoxElements] = useState([{icon:"", title:"", content:""}])
    const [graphBoxes, setGraphBoxes] = useState([{title:"deneme1", content:"",}, {title:"deneme2", content:"",}, {title:"deneme3", content:"",}])
    const [totalSpendings, setTotalSpendings] = useState(0)

    const calculateTotalSpending = () =>{
        let total = 0
        spendings !== null && Object.keys(spendings).length !== 0 && spendings.map((spending) => 
            total += spending.money
        )

        return total.toFixed(2)
    }

    useEffect(() => {
        let total = calculateTotalSpending()
        if(totalSpendings !== total){
            setTotalSpendings(total)
        }
        setBoxElements([{icon:"", title:"Total Spendings", content:`${user.currency}${totalSpendings}`}])
    }, [spendings, totalSpendings])
    

    return (
        <div>
            <div className={classes.homeHeader}>
                <div className={classes.headerTitle}> Hello {user.name} </div>
                <div className={classes.headerText}> We are on a mission to make peoples life easier. </div>
                <Boxes boxElements={boxElements}/>
                <GraphBoxes boxType={"fullBox"} spendings={spendings} totalSpendings={totalSpendings} currency={user.currency}/>
                <GraphBoxes boxType={"multipleBox"} boxes={graphBoxes}/>
            </div>
        </div>
    )
}
