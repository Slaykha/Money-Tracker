import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({

})

export const Item = (props) => {
    const classes = useStyles()
    const{
        itemText,
        itemType,
        itemLocation
    } = props

    return (
        <div>
            {itemType && itemType == "Button" 
            ? 
                <Button 
                    variant="contained" 
                    sx={{marginLeft: "22px", width:"210px", justifyContent:"normal", fontSize:"14px"}}
                    component={Link}
                    to={`/${itemLocation}`}    
                >
                    {itemText}
                </Button>  
            : 
                <div></div>    
            }
        </div>
    )
}
