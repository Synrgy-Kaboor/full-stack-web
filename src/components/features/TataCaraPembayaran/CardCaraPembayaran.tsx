import { useState } from 'react';
import { Card, Typography, Box, IconButton, Collapse } from '@mui/material';

export default function PaymentCard({ label, title, instructions }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <Box>
      <Typography sx={{ mb: 1 }} fontWeight={'bold'}>
       {label}
      </Typography>

      <Card variant="outlined" sx={{ padding: '18px', paddingLeft: '24px', position: 'relative' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          onClick={toggleDropdown}
        >
          <Typography ml={1} fontWeight={'bold'} sx={{ marginLeft: '0px' }}>
            {title}
          </Typography>

          <IconButton sx={{ marginLeft: 'auto' }}>
            {isDropdownOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
                <path d="M20.25 17.375L13.5 10.625L6.75 17.375" stroke="black" stroke-width="2" stroke-linecap="round"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
                <path d="M6.75 10.625L13.5 17.375L20.25 10.625" stroke="black" stroke-width="2" stroke-linecap="round"/>
              </svg>
            )}
          </IconButton>
        </Box>

        <Collapse in={isDropdownOpen} timeout="auto" unmountOnExit>
          <Typography mt={2} fontSize={'14px'} marginTop={'0px'} marginLeft={'20px'}>
            <ul>
              {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </Typography>
        </Collapse>
      </Card>
    </Box>
  );
}
