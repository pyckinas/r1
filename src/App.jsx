
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>labas</h1>
      </header>
    </div>
  );
}

import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {


    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then(res => setUsers(res.date));
    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <h1>API</h1>
                <ul>
                    {
                        users.map(u => <li key={u.id}>{u.joke} <span></span></li>)
                    }
                </ul>
            </header>
        </div>
    );
}

export default App;
