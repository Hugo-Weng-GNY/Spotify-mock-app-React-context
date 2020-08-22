import React, { useState, useEffect } from 'react';
import '../styling/App.css';
import Login from './login'
import { getTokenFromRes } from './spotify';
import User from './user';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from "../dataLayer";

const spotify = new SpotifyWebApi();

function App() {
    // const [token, setToken] = useState(null);
    const [{ user, token }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromRes();
        window.location.hash = "";
        const _token = hash.access_token;

        if(_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token
            });
            //setToken(_token);

            spotify.setAccessToken(_token);
            spotify.getMe().then(user =>{
                dispatch({
                    type: 'SET_USER',
                    user: user
                })
            });

            spotify.getUserPlaylists().then((playlists)=>{
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists
                })
            })
        }
    }, []);
    return (
        <div className="app">
            {
                token ? (
                    <User spotify={spotify}/>
                ):(
                    <Login/>
                )
            }
        </div>
    );
}

export default App;
