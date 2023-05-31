import React from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import SpendingListItem from './SpendingListItem';
import { deleteSpending } from '../../actions/spendingAction';

const SpendingList = (props) => {
    const{
        spendings,
        deleteSpending,
        currency
    }=props

    return (
        <div>
            <Table sx={{ width:"80%", marginLeft:"10%", background:"#393E46", borderRadius:"10px" }} aria-label="simple table">
                <TableHead>
                    {spendings && spendings.length !== 0 && 
                        <TableRow>
                            <TableCell sx={{color:"rgb(238, 238, 238)"}}>Date</TableCell>
                            <TableCell sx={{color:"rgb(238, 238, 238)"}} align="right">Amount</TableCell>
                            <TableCell sx={{color:"rgb(238, 238, 238)"}} align="right">Spending Type</TableCell>
                            <TableCell sx={{color:"rgb(238, 238, 238)"}} align="right">Delete</TableCell>
                        </TableRow>
                    }
                </TableHead>
                <TableBody>
                {spendings && spendings.length !== 0 ? spendings.map((spending) => (
                    <SpendingListItem 
                        spending={spending} 
                        deleteSpending={deleteSpending}
                        currency={currency}    
                    />
                ))
                :
                <div
                    style={{
                        fontSize:"36px",
                        display:"block",
                        textAlign:"center",
                        marginTop:"5%",
                        marginBottom:"5%",
                        color:"whitesmoke"
                    }}
                >
                    No Records To Display!
                </div>
                }
                </TableBody>
            </Table>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currency: state.user.currency
});

const mapDispatchToProps = (dispatch) => ({ 
    deleteSpending: (spendingId) => {dispatch(deleteSpending(spendingId))}
});

export default connect(mapStateToProps,mapDispatchToProps) (SpendingList);
