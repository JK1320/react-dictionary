// themeProvider allows us to apply themes to MUI components
import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import "./Header.css";
import categories from "../../data/category";

const Header = ({category, setCategory}) => {

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
          <TextField
          className='search'
            label="Search a word"
            variant="standard"
          />
          <TextField
            select
            label="Language"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            helperText="Please select your language"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header