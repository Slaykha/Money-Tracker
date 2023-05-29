import { makeStyles } from '@mui/styles'
import React from 'react'
import { Item } from './Item'

const useStyles = makeStyles({
    listTitle:{
        color:"gray",
        margin:"24px",
        fontSize:"14px"
    }
})

export const ItemList = (props) => {
    const classes = useStyles()
    const{
        listTitle,
        listItems,
        
    } = props

    return (
        <div className={classes.list}>
            <div className={classes.listTitle}>
                {listTitle}
            </div>
            {listItems && listItems.map((listItem) => (
                <Item itemText={listItem.itemText} itemType={listItem.itemType} itemLocation={listItem.itemLocation} itemIcon={listItem.itemIcon}/>
            ))}
        </div>
    ) 
}
