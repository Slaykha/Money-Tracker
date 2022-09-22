import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';

const AddSpendingButton = () => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: "#7895B2",
        backgroundColor: "rgb(174, 189, 202, 0.8)",
        width:"100px",
        height:"50px",
        '&:hover': {
          backgroundColor: "rgb(174, 189, 202, 1)",
        },
      }));

    return (
        <ColorButton
        >
            Add
        </ColorButton>
    );
};

export default AddSpendingButton;