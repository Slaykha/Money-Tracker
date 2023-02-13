import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
                <Button 
                    variant="text" 
                    sx={{marginLeft: "22px", width:"210px", justifyContent:"normal", fontSize:"14px", color:"white"}}
                    component={Link}
                    to={`/${itemLocation}`}    
                    startIcon={<AddIcon />}
                    endIcon={<ChevronRightIcon />}
                >
                    {itemText}
                </Button>    
            }
        </div>
    )
}
