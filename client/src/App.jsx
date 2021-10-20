// Import Dependencies
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
// Import Pages
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
// Import Components

// Import Utils/Data
import { useGlobalContext } from './utils/GlobalContext';
// CSS
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import MyProjectsFull from './components/MyProjectsFull';

function App() {

    const [{ darkMode, hidesLoader }, dispatch] = useGlobalContext();


    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        dispatch({ type: 'setDarkMode', payload: e.matches });
    })

    // Remove Loading and Change Body Background Color On Dark Mode Change
    useEffect(() => {
        hidesLoader();
        if (darkMode) {
            document.body.classList.add('darkMode');
            return
        }
        document.body.classList.remove('darkMode');
    }, [darkMode, hidesLoader,])


    return (
        <Router>
            <ToastContainer
                position="top-right"
                transition={Zoom}
                autoClose={4000}
            />
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/projects' component={MyProjectsFull} />
                <Route component={NotFoundPage} />
                {/* <Redirect from='*' to='/404' /> */}
            </Switch>
        </Router>
    );
}

export default App;
