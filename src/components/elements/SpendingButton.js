import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';

const SpendingButton = (props) => {
  const{
    handleClick
  } = props
    const ColorButton = styled(Button)(({ theme }) => ({
        color: "rgb(0, 173, 181)",
        backgroundColor: "rgb(238, 238, 238, 0.6)",
        width:"100px",
        height:"55px",
        marginLeft:"10%",
        '&:hover': {
          backgroundColor: "rgb(238, 238, 238, 1)",
        },
      }));

    return (
        <ColorButton
          onClick={() => handleClick()}
        >
            Add
        </ColorButton>
    );
};

export default SpendingButton;