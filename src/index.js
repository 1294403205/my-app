import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyComponent from './myComponent';
import Clock from './Clock';
import MaterialIndex from './MaterialIndex';
import AutoFinish from './AutoFinish';
import { BrowserRouter as Router, Route, Link, NavLink, Routes } from 'react-router-dom';
// let name = 'React';
// function tick() {
//   const element = (
//     <Clock />
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
ReactDOM.render(

    <div>
        routeView
        <Router
            basename="/test"
        >
            <div>
                <NavLink to="./mat">mat</NavLink>
                <NavLink to="./auto">auto</NavLink>
            </div>
            <Routes>
                <Route path="/mat" >

                </Route>

                <Route path="/auto" componen{AutoFinish} />
            </Routes>
        </Router>

    </div>


    , document.getElementById('root'));


// setInterval(tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

