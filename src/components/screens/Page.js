import React from "react";

import { Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  pageHeader: {
    marginBottom: "24px",
  },
  pageTitle: {
    marginBottom: "12px",
    fontSize: "28px",
  },
  pageTitle2: {
    marginBottom: "12px",
    fontSize: "18px",
  },
  pageHeaderTitles: {
    display: "block",
  },
  pagination: {
    justifyContent: "center",
    marginTop: "24px",
  },
  search: {
    marginBottom: "12px",
  },
  searchButton: {
    marginLeft: "10px",
  },
});

export default function Page(props) {
  const classes = useStyles();

  const PageComponent = props.component;
/* 
  React.useEffect(() => {
    document.title = props.title;
  }); */

  return (
    <div style={{marginLeft:"250px"}}>
      {/* <div className={classes.pageHeader}>
        <div className={classes.pageHeaderTitles}>
          <Typography className={classes.pageTitle}>{props.title}</Typography>
          <Typography id="secondTitle" className={classes.pageTitle2}>
            {props.secondTitle}
          </Typography>
        </div>

        <Divider />
      </div> */}

      <PageComponent />
    </div>
  );
}
