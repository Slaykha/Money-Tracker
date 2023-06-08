import React, { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {NumericFormat} from 'react-number-format';
import TextField from '@mui/material/TextField';

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, currency, ...other } = props;
  
    return (
// event.target.value nedir nerden gelir bu yaprak diyenlere cevap niteliğinde kod
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(spending) => {
          onChange({
            target: {
              value: spending.money,
              intValue: spending.value
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix={currency}
      />
    );
  });
  
  NumberFormatCustom.propTypes = {
    onChange: PropTypes.func.isRequired,
    currency: PropTypes.string.isRequired,
  };


const SpendingTextField = (props) => {
    const {
      spending,
      setSpending,
      staticWidth,
      currency
    }=props


    const [moneyValue, setMoneyValue] = useState("")
    
    const handleChange = (event) => {
      setMoneyValue(event.target.value)

      setSpending(parseFloat(event.target.intValue));
    };

    useEffect(() => {
      if(spending && spending != 0){
        setMoneyValue(spending)
      }
    }, [spending])
    

    return (
        <TextField
          style={{margin: "2%", width: "96%"}}
          label="Money"
          value={moneyValue}
          onChange={(e) => {handleChange(e)}}
          name="numberformat"
          InputProps={{inputComponent: NumberFormatCustom, inputProps: {currency}, style:{backgroundColor:"rgb(238, 238, 238, 0.6)"}}}
          InputLabelProps={{ shrink: true }}
          variant="filled"
        />
    );
    
};

export default SpendingTextField;