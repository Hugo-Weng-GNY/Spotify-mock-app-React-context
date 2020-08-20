import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { DataLayer }from './dataLayer';
import reducer, { initialState } from "./reducer";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <DataLayer initialState={initialState} reducer={reducer}>
        <App />
    </DataLayer>,
    document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
