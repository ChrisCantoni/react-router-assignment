import axios from 'axios';
import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import About from '../About/About.jsx';

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                <h1 className="App-title">GitHub Student List</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/allStudents">All Students</Link></li>
                    </ul>
                </nav>
                </header>
                <br/>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/">
                    <StudentForm />
                </Route>
                <Route exact path="/allStudents">
                    <p>Student list:</p>
                    <StudentList />
                </Route>
            </Router>
        </div>
    );
}

export default App;
