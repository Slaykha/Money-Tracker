import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import SpendingListItem from './SpendingListItem';
import { deleteSpending, updateSpending } from '../../actions/spendingAction';
import EditSpendingDialog from '../spending/EditSpendingDialog';
import { editSpendingApi } from '../../api/spendingApi';
import { ENDPOINT } from '../../App';

const SpendingList = (props) => {
    const{
        spendings,
        deleteSpending,
        currency,
        setAlert,
        updateSpending
    }=props

    const [openEditSpendingDialog, setOpenEditSpendingDialog] = useState(false)
    const [currentSpendingId, setCurrentSetspendingId] = useState("")
    const [moneyEdit, setMoneyEdit] = useState("")
    const [dateEdit, setDateEdit] = useState(new Date())
    const [typeEdit, setTypeEdit] = useState("")

    const handleCloseEdit = () => {
        setOpenEditSpendingDialog(false)
    }

    const handleEditSpending = async () => {
        try{
            let resp = await editSpendingApi(ENDPOINT, currentSpendingId, {money: moneyEdit, spendingType: typeEdit, spendingDate: dateEdit})
            if(resp){
                updateSpending(resp)
                setAlert({ open: true, message: "Spending Updated Successfully.", status: "success" })
            }
        }catch(e){
            console.log(e)
            setAlert({ open: true, message: "An Error Occured!", status: "error" })
        }
    }

    return (
        <div>
            <Table sx={{ width:"80%", marginLeft:"10%", background:"#393E46", borderRadius:"10px" }} aria-label="simple table">
                <TableHead>
                    {spendings && spendings.length !== 0 && 
                        <TableRow>
                            <TableCell sx={{color:"rgb(238, 238, 238)"}}>Date</TableCell>
                            <TableCell sx={{color:"rgb(238, 238, 238)"}} align="right">Amount</TableCell>
                            <TableCell sx={{color:"rgb(238, 238, 238)"}} align="right">Spending Type</TableCell>
                            <TableCell sx={{color:"rgb(238, 238, 238)"}} align="right">Actions</TableCell>
                        </TableRow>
                    }
                </TableHead>
                <TableBody>
                {spendings && spendings.length !== 0 ? spendings.map((spending) => (
                    <>
                        <SpendingListItem 
                            spending={spending} 
                            deleteSpending={deleteSpending}
                            currency={currency}   
                            setAlert={setAlert} 
                            setOpenEdit={setOpenEditSpendingDialog}
                            setMoneyEdit={setMoneyEdit}
                            setDateEdit={setDateEdit}
                            setTypeEdit={setTypeEdit}
                            setCurrentSetspendingId={setCurrentSetspendingId}
                        />      
                    </>
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
            <EditSpendingDialog 
                open={openEditSpendingDialog}
                handleClose={handleCloseEdit}
                handleClick={handleEditSpending}
                currency={currency}
                moneyEdit={moneyEdit}
                dateEdit={dateEdit}
                typeEdit={typeEdit}
                setMoneyEdit={setMoneyEdit}
                setDateEdit={setDateEdit}
                setTypeEdit={setTypeEdit}
                handleEdit={handleEditSpending}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    currency: state.user.currency
});

const mapDispatchToProps = (dispatch) => ({ 
    deleteSpending: (spendingId) => {dispatch(deleteSpending(spendingId))},
    updateSpending: (resp) => {dispatch(updateSpending(resp))}
});

export default connect(mapStateToProps,mapDispatchToProps) (SpendingList);
