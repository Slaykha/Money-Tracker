import React from "react";

import { makeStyles } from "@mui/styles";
import { Header } from "../header/Header";
import { Menu } from "../sideMenu/Menu";

const useStyles = makeStyles({
});

export default function Page(props) {
  const classes = useStyles();

  const PageComponent = props.component;
/* 
  React.useEffect(() => {
    document.title = props.title;
  }); */

  return (
    <>
      <Header />
      <Menu />
      <div style={{marginLeft:"250px"}}>

        <PageComponent />
      </div>
    </>
    
  );
}
