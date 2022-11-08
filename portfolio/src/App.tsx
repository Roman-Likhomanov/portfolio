import React from 'react';
import './App.scss';
import Header from './header/Header';
import Main from './main/Main';
import AboutMe from './aboutme/AboutMe';
import Projects from './portfolio/Projects';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
