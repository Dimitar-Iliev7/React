import React from 'react'
import Paper from '@mui/material/Paper';

function Header() {
  return (
    <Paper style={{padding: "5px", display: "flex"}} square elevation={3}>
        <img style={{width: "50px"}} src="https://www.creative-tim.com/learning-lab/assets/images/react-native.png" alt="logo"></img>
        <h1 style={{margin: "0", fontFamily: "cursive", fontWeight: "100"}}>React App</h1>
    </Paper>
  )
}

export default Header