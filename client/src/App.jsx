// Import Dependencies
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
// Import Pages
import Homepage from './pages/Homepage';
// Import Components

// Import Utils/Data
import { useGlobalContext } from './utils/GlobalContext';
// CSS
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {

    const [{hidesLoader}, dispatch] = useGlobalContext();

    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        dispatch({ type: 'setDarkMode', payload: e.matches });
    })
    

    useEffect(() => {
        hidesLoader();
    }, [hidesLoader,])


    return (
        <Router>
            <ToastContainer
                position="top-right"
                transition={Zoom}
                autoClose={4000}
            />
            <Switch>
                <Route exact path='/' component={Homepage} />
                {/* <Route exact path='/guests' component={Guests} />
                <Route exact path='/games' component={Games} />
                <Route exact path='/zoomrooms' component={ZoomRooms} /> */}
            </Switch>
        </Router>
    );
}

export default App;
