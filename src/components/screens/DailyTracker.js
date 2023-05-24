import { makeStyles } from "@mui/styles";
import React from "react";
import { connect } from "react-redux";
import CircleProgressBar from "../dailyTracker/CircleProgressBar";

const useStyles = makeStyles((theme) => ({}));

const DailyTracker = (props) => {
    const classes = useStyles();

    const left = 20

    const { dailyLimit, spendings, currency } = props;

    
    return (
        <div>
            <div
                style={{fontSize:"36px", color:"whitesmoke", marginTop:"5%", marginLeft:"5%"}}
            >
                Daily Spending Limit
            </div>
            <div
                style={{marginTop:"5%",}}
            >
                <div
                    style={{display:"flex", fontSize:"24px", color:"whitesmoke", justifyContent:"center", margin:"2%"}}
                >
                    Daily Limit: {dailyLimit}{currency}
                </div>
                <CircleProgressBar 
                    spendings={spendings}
                    dailyLimit={dailyLimit}
                    currency={currency}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    dailyLimit: state.user.dailyLimit,
    spendings: state.spendings,
    currency: state.user.currency
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DailyTracker);
