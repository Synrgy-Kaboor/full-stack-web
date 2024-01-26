import { Stack, Typography, Select, SelectChangeEvent, MenuItem} from '@mui/material';
import { useState } from 'react';

const DetailAkun = () => {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Stack direction={'column'} maxWidth={'880px'} alignItems={'start'} sx={{width: '100%', height:'100%', padding: '34px 43px', borderRadius:'8px',
            border:'1px solid #C2C2C2', background: 'white'}} gap={2} >  
      <Typography sx={{color: '#1C1C1E', fontFamily: 'Open Sans', fontSize: '24px', fontWeight: 700, letterSpacing: '-0.5px'}}>
        Informasi Pribadi
      </Typography>
      <Stack>
        <Typography sx={{
                      color: '#505050', fontFamily: 'Open Sans', fontSize: '20px', fontWeight: 600, letterSpacing: '-0.75px'
                  }}>
                      Titel
        </Typography>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Stack>
    </Stack>
  )
}

export default DetailAkun