import React, { useEffect } from 'react';
import { fetchSpendingsApi } from '../../api/spendingApi';
import ListHead from './ListHead';
import ListItem from './ListItem';
import { ENDPOINT } from "../../App";
import { connect } from 'react-redux';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import SpendingListItem from './SpendingListItem';

const SpendingList = (props) => {
    const{
        spendingArray,
        setSpendingArray,
        userId,
        spendings
    }=props


    /* useEffect(() => {
        getSepndings()
    }, [])

    const getSepndings = async () => {
        try {
            const response = await fetchSpendingsApi(ENDPOINT, userId)

            setSpendingArray(response.data)
        } catch (error) {
            console.info(error)
        } 
    } */
    
    return (
        <div>
            <Table sx={{ width:"80%", marginLeft:"10%", background:"#393E46", borderRadius:"10px" }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell sx={{color:"rgb(238, 238, 238)"}}>Date</TableCell>
                    <TableCell sx={{color:"rgb(238, 238, 238)"}} align="right">Money</TableCell>
                    <TableCell sx={{color:"rgb(238, 238, 238)"}} align="right">Type</TableCell>
                    <TableCell sx={{color:"rgb(238, 238, 238)"}} align="right">Delete</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {spendings && spendings.map((spending) => (
                    <SpendingListItem spending={spending}/>
                ))}
                </TableBody>
            </Table>
{/*             <ListHead/>
            {spendings && spendings.map((spending) => (
                <ListItem
                    spending={spending}
                />
            ))} */}
            
        </div>
    );
};

const mapStateToProps = (state) => ({
    userId: state.user.id,
    spendings: state.spendings
});

const mapDispatchToProps = (dispatch) => ({
   
});

export default connect(mapStateToProps,) (SpendingList);
