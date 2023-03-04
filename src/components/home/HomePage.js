import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { GetUserApi } from '../../api/authApi'
import { ENDPOINT } from '../../App'
import { Boxes } from './Boxes'

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
    }
}))

export const HomePage = () => {
    const classes = useStyles()

    const [boxElements, setBoxElements] = useState([{icon:"", title:"Total Spendings", content:"₺5.514,52"},{icon:"", title:"Total Spendings", content:"₺5.514,52"},])
    const [user, setUser] = useState({})

    const getUser = async () => {
        try{
            const resp = await GetUserApi(ENDPOINT)
            setUser(resp.data)
        }catch(e){
            console.error(e)
        }
    }

    useEffect(() => {
      getUser()
    }, [])
    

    return (
        <div>
            <div className={classes.homeHeader}>
                <div className={classes.headerTitle}> Hello {user.name} </div>
                <div className={classes.headerText}> We are on a mission to make peoples life easier. </div>
                <Boxes boxElements={boxElements}/>
                
            </div>
        </div>
    )
}
