import { createContext, useContext, useReducer } from 'react';

export const GlobalContext = createContext();

const defaultState = {
    // Functions
    hidesLoader: () => document.querySelector('.load-icon').classList.add('hide-icon'),
    showLoader: () => document.querySelector('.load-icon').classList.remove('hide-icon'),
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'setHuman':
            return {
                ...state,
                human: action.payload
            };
        case 'setAllHuman':
            return {
                ...state,
                allHuman: action.payload,
            };
        case 'setAllHumanFiltered':
            return {
                ...state,
                allHumanFiltered: action.payload,
            };
        case 'setSelectedGuest':
            return {
                ...state,
                selectedGuest: action.payload,
            };
        case 'setPlaying':
            return {
                ...state,
                playingGuests: action.payload,
            };
        case 'setGame':
            return {
                ...state,
                game: action.payload,
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