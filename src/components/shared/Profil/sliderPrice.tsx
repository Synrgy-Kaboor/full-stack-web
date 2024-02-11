import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// import { useTheme } from '@mui/material';

function valuetext(value: number) {
  if (Array.isArray(value)) {
    return `Rp.${value[0].toLocaleString()} - Rp.${value[1].toLocaleString()}`;
  } else {
    return `Rp.${value.toLocaleString()}`;
  }
}

export default function SliderPrice() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    console.log(value[0]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price Range'}
        value={value}
        size='small'
        onChange={handleChange}
        valueLabelDisplay='auto'
        valueLabelFormat={valuetext}
        max={5000000}
        min={0}
      />
    </Box>
  );
}
