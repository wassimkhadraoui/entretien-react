import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import Exercice1 from './pages/HomePage';

// Import Css Here 
import './assets/scss/style.scss';

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route exact path='/' element={<Exercice1/>}/>
                                    </Routes>
            </ScrollToTop>
        </Router>
    );
}

export default App;
