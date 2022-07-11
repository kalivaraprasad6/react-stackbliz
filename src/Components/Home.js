import React from 'react';
import TextField from '@mui/material/TextField';
import './Home.css';
const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home</h1>
      <div>
        <p></p>
        <TextField
          className="txtfield"
          id="outlined-basic"
          label="Enter Name"
          variant="outlined"
          type="text"
          inputProps={{ color: 'black' }}
        />
      </div>
    </div>
  );
};
export default Home;
