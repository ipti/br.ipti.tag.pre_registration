import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectUi = ({ value, handleChange, label, options }) => {


    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {options.map((item, index) => {
                        return (
                            <MenuItem value={10}>Ten</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectUi;