import { alpha, MenuItem, Select, Zoom } from '@mui/material'
import { MdExpandMore } from "react-icons/md";
import React, { useState } from 'react';

const CustomTransition = React.forwardRef(function CustomTransition(
    props,
    ref,
) {
    return <Zoom {...props} ref={ref} />;
});

const SelectInput = () => {
    const [selectValue, setSelectValue] = useState('favourite');
    return (
        <Select
            value={selectValue}
            size='small'
            IconComponent={MdExpandMore}
            sx={{
                borderRadius: '50px',
                fontSize: '0.65rem',
                '& .MuiSelect-outlined': {
                    padding: '6px 14px'
                }
            }}
            MenuProps={{
                TransitionComponent: CustomTransition,
                transitionDuration: { enter: 500, exit: 300 },
                PaperProps: {
                    sx: {
                        backgroundColor: (theme) => alpha(theme.palette.mypresetcolor.foregroundColor, 0.5),
                        backdropFilter: 'blur(5px)',
                        '& .MuiMenuItem-root': {
                            minHeight: '30px',
                            fontSize: '0.75rem',
                        }
                    }
                }
            }}
            onChange={(e) => setSelectValue(e.target.value)}
        >
            <MenuItem value="all">All Projects</MenuItem>
            <MenuItem value="favourite">Favourite</MenuItem>
            <MenuItem value="others">Others</MenuItem>
        </Select>
    )
}

export default SelectInput