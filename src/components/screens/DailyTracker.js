import { makeStyles } from "@mui/styles";
import React from "react";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({}));

const DailyTracker = (props) => {
    const classes = useStyles();

    const left = 20

    const { dailyLimit } = props;

    const percentageCalculator = () => {
        return (left / dailyLimit) * 100 * 3.6 
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "150px",
                width: "300px",
                height: "300px",
                borderRadius: "100%",
                border:"4px solid #D7DBDD ",
                background: `conic-gradient(from 0deg, green 0deg ${percentageCalculator()}deg, greenyellow ${percentageCalculator()}deg ${360 - percentageCalculator()}deg)`,
                transition:"--p 0.5s,--l 0.5s,--a 0.5s"
            }}
        >
            <div
                style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "100%",
                    border:"4px solid #D7DBDD ",
                    backgroundColor: "#17202A",
                }} 
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop:"40%",
                        color:"white",
                        fontSize:"24px"
                    }} 
                >
                    {dailyLimit} / {dailyLimit - left}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    dailyLimit: state.user.dailyLimit,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DailyTracker);
