import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import {NumericFormat} from 'react-number-format';
import TextField from '@mui/material/TextField';

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
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
        prefix="$"
      />
    );
  });
  
  NumberFormatCustom.propTypes = {
    onChange: PropTypes.func.isRequired,
  };


const SpendingTextField = (props) => {
    const {
      spending,
      setSpending,
      staticWidth
    }=props

    const [moneyValue, setMoneyValue] = useState("")
    
    const handleChange = (event) => {
      setMoneyValue(event.target.value)

      setSpending({
        date: spending.date,
        money: parseFloat(event.target.intValue),
        type: spending.type,
        currency: spending.currency
      });
    };

    return (
        <TextField
            style={{marginLeft:"5%", width: staticWidth}}
            label="Money"
            value={moneyValue}
            onChange={(e) => {handleChange(e)}}
            name="numberformat"
            id="formatted-numberformat-input"
            InputProps={{inputComponent: NumberFormatCustom, style:{backgroundColor:"rgb(238, 238, 238, 0.6)"}}}
            variant="filled"
        />
    );
    
};

export default SpendingTextField;