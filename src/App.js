import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { alpha, Container, styled, Switch } from '@material-ui/core';
import Header from './components/header/Header';
import Definitions from './components/definitions/Definitions';
import { grey } from '@material-ui/core/colors';


function App() {
const [word, setWord] = useState("");
const [meanings, setMeanings] = useState([]);
const [category, setCategory] = useState("en");
const [LightMode, setLightMode] = useState(false);



const dictionaryApi = async () => {
try {
  const data = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
  );
setMeanings(data.data);
} catch (error) {
  console.log(error);
}
};

useEffect(() => {
  dictionaryApi();
  // eslint-disable-next-line
}, [word, category]);


const DarkMode = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: grey[300],
    "&:hover": {
      backgroundColor: alpha(grey[500], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: grey[500],
  },
}));

//const label = { inputProps: { "aria-label": "Color switch demo" } };


  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightMode ? "Dark" : "Light"} Mode</span>
          <DarkMode
            color="secondary"
            checked={LightMode}
            onChange={() => setLightMode(!LightMode)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
