const initialState = {
    user: 'Austin',
    firstName: 'Austin',
    lastName: 'Randall',
    picture: 'https://robohash.org/me',
}

//action type
const LOGIN = "LOGIN";
const FIRSTNAME = "FIRSTNAME";
const LASTNAME = "LASTNAME";

//reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload }

        case FIRSTNAME:
            return { ...state, firstName: action.payload }

        case LASTNAME:
            return { ...state, lastName: action.payload }

        default: 
            return state;
    }
};

//action creator
export function login(user) {
    return {
        type: LOGIN,
        payload: user
    }
}

export function updateName(firstName) {
    return {
        type: FIRSTNAME,
        payload: firstName
    }
}

export function updateLastName(lastName) {
    return {
        type: LASTNAME,
        payload: lastName
    }
}