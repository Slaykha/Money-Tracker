import { IconButton, TableCell, TableRow } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const SpendingListItem = ({spending}) => {

    const getFormattedDate = () => {
        let today = new Date(spending.spendingDate);
        let yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return dd + '/' + mm + '/' + yyyy;
    }

    const handleDelete = async () => {

    }

    return (
        <>
            <TableRow
                key={spending.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell sx={{color:"rgb(238, 238, 238)"}} component="th" scope="row">{getFormattedDate()}</TableCell>
                <TableCell sx={{color:"rgb(238, 238, 238)"}} align="right">{spending.money}</TableCell>
                <TableCell sx={{color:"rgb(238, 238, 238)"}} align="right">{spending.spendingType}</TableCell>
                <TableCell sx={{color:"rgb(238, 238, 238)"}} align="right">
                    <IconButton 
                        onClick={handleDelete}                        
                    >
                        <DeleteIcon sx={{color:"rgb(238, 238, 238)"}}/>
                    </IconButton>   
                </TableCell>
            </TableRow>
        </>
    )
}

export default SpendingListItem