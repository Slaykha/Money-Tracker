import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';

const SpendingButton = (props) => {
  const{
    handleClick,
    staticWidth
  } = props
    const ColorButton = styled(Button)(({ theme }) => ({
        width: "96%",
        height:"55px",
        margin:"2%",
      }));

    return (
        <ColorButton
          onClick={() => handleClick()}
          variant="contained"
        >
            Add Spending
        </ColorButton>
    );
};

export default SpendingButton;