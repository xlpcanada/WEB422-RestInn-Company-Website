import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
  return (
    <TextField style={{background: 'white', height:'fit-content', marginRight: '64px'}} id="outlined-basic" label="Search" variant="outlined" />
  );
}

