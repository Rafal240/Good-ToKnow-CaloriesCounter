import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';
import "./scss/main.scss";

const App = () => <HelloWorld/>

ReactDOM.render(<App/>, document.getElementById("app"));