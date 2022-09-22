import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import {NumericFormat} from 'react-number-format';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="₺"
      />
    );
  });
  
  NumberFormatCustom.propTypes = {
    onChange: PropTypes.func.isRequired,
  };

const MoneyTextField = () => {
    const [values, setValues] = useState({currentMoney: ''});
    
    const handleChange = (event) => {
        setValues({
        ...values,
        });
    };
    return (
        <TextField
            label="Money"
            value={values.currentMoney}
            onChange={handleChange}
            name="numberformat"
            id="formatted-numberformat-input"
            InputProps={{inputComponent: NumberFormatCustom, style:{background: "rgb(174, 189, 202, 0.6)"}}}
            variant="filled"
        />
    );
};

export default MoneyTextField;