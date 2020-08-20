import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './login'
import { getTokenFromRes } from './spotify';
import User from './user';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const hash = getTokenFromRes();
        window.location.hash = "";
        const _token = hash.access_token;

        if(_token) {
            setToken(_token);
            spotify.setAccessToken(_token);
            spotify.getMe().then(user =>{
                console.log('user:', user);
            });
        }

    }, []);
    return (
        <div className="app">
            {
                token ? (
                    <User/>
                ):(
                    <Login/>
                )
            }
        </div>
    );
}

export default App;
