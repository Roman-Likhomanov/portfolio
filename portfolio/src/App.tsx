import React from 'react';
import './App.scss';
import Header from './header/Header';
import Main from './main/Main';
import AboutMe from './aboutme/AboutMe';
import Portfolio from './portfolio/Portfolio';
import Contacts from './contacts/Contacts';
import Footer from './footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
