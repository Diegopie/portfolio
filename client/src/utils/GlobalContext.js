import { createContext, useContext, useReducer } from 'react';

export const GlobalContext = createContext();

let darkMode = Boolean;

if (window.matchMedia) {
            darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches; 
}

const defaultState = {
    // Functions
    hidesLoader: () => document.querySelector('.load-icon').classList.add('hide-icon'),
    showLoader: () => document.querySelector('.load-icon').classList.remove('hide-icon'),
    darkMode: true,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'setDarkMode':
            return {
                ...state,
                darkMode: action.payload
            };
        default: return state;
    }
};

const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <GlobalContext.Provider value={[state, dispatch]} {...props} />
    );

};

export default GlobalProvider;

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};