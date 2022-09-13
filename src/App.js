import logo from './logo.svg';
import './App.css';
import JsonData from "./MOCK_DATA.json";
import { useState } from 'react';

function App() {
  const [searchterm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input type="text" placeholder='Search..........' onChange={(event) => setSearchTerm(event.target.value)} />
      {JsonData.filter((val) => {

        if (searchterm == "") {
          return val
        } else if (val.first_name.toLowerCase().includes(searchterm.toLowerCase())) {
          return val

        }
      }).map((val, key) => (
        <div key={key}><p>{val.first_name}</p></div>
      ))}
    </div>
  );
}

export default App;
