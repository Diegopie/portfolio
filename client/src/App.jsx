// Import Dependencies
import React, { useCallback, useEffect } from 'react';
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

    const [{ getGuestData }, dispatch] = useGlobalContext();
   
    // * Fetch and Store All Guests in State
    const runGetGuestData = useCallback(() => {
        getGuestData()
            .then(data => {
                if (data) {
                    // console.log(data);
                    localStorage.setItem('human', JSON.stringify(data.human));
                    dispatch({ type: 'setHuman', payload: data.human });
                    dispatch({ type: 'setAllHuman', payload: data.allHuman });
                    dispatch({ type: 'setAllHumanFiltered', payload: data.allHumansFiltered });
                }
            })
    }, [dispatch, getGuestData])
    
    useEffect(() => {
        runGetGuestData();
    }, [runGetGuestData])


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
