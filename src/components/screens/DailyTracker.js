import { makeStyles } from '@mui/styles';
import React from 'react';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    
}))

const DailyTracker = (props) => {
    const classes = useStyles()

    const {
        dailyLimit
    } = props

    return (
        <div style={{margin:"10%", fontSize:"24px", color:"white"}}>
            User's Daily Spending Limit: {dailyLimit}
        </div>
    );
};

const mapStateToProps = (state) => ({
    dailyLimit: state.user.dailyLimit
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps,mapDispatchToProps) (DailyTracker);