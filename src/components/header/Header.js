// themeProvider allows us to apply themes to MUI components
import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import "./Header.css";

const Header = () => {

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    type: "dark",
  },
});

  return (
    <div className="header">
      <span className="title">Word Hunt</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            helperText="Please select your country"
          >
              <MenuItem>English</MenuItem>
            
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header