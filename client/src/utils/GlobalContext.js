import { createContext, useContext, useReducer } from 'react';

export const GlobalContext = createContext();

const defaultState = {
    human: JSON.parse(localStorage.getItem('human')),
    allHuman: [],
    allHumanFiltered: [],
    selectedGuest: [],
    playingGuests: [],
    game: { },
    // Functions
    getGuestData: async () => {
        const human = JSON.parse(localStorage.getItem('human'));
        if (!human) {
            return;
        }

        try {
            const guestResponse = await fetch('/api/guest/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    accessCode: human.accessKey
                }),
                method: 'POST'
            });

            // ** Verify Data
            const data = await guestResponse.json();
            // console.log(data);
            // ** No Success
            if (!data.success) {
                console.log('Could not update guest');
                return false;
            }

            // ** Success
            return data.message

        } catch (err) {
            console.log(err);
        }
    },
    getGameData: async () => {
        try {
            const gameDataRes = await fetch('/api/game/get', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    lol: 'imSoNad'
                }),
                method: 'POST'
            });

            // ** Verify Data
            const data = await gameDataRes.json();
            // console.log(data);
            // ** No Success
            if (!data.success) {
                return false;
            }

            // ** Success
            return data.message.game;

        } catch (err) {
            console.log(err);
        }
    }
};

// console.log(defaultState);
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