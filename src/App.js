import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';

function App() {
const [word, setWord] = useState("");
const [meanings, setMeanings] = useState([]);

const dictionaryApi = async () => {
try {
  const data = await axios.get(
    "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
  );
setMeanings(data.data);
} catch (error) {
  console.log(error);
}
};

useEffect(() => {
 dictionaryApi();
}, []);



  return (
    <div className="App">
   <Container maxWidth="md">
  Dictionary 
   </Container>
    </div>
  );
}

export default App;
