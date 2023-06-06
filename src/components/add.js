import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function () {
  return (
    <div>
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="standard-basic" label="Subject" variant="standard" placeholder="enter the subject" />
        <TextField id="standard-basic" label="Score" variant="standard" placeholder="enter the Score" />
        <Button style={{ marginTop:"13px"   ,width: "130px", height: "40px",}} variant="contained">ADD</Button>
        </Box>
    </div>
  )
}
