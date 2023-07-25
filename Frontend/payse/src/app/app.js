import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './index.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <p4>hello</p4>
            </div>
        </Router>
    );
}

export default App;
