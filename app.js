import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
import Main from './src/index.js';

const App = () => <Main/>

ReactDOM.render(<App/>, document.getElementById("app"));