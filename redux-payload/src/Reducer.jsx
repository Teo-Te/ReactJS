const initData = {
    name: 'redux-payload',
    surname: 'yeee',
    userName: 'Jari'
}

const reducer = (state = initData, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'SET_SURNAME':
            return {
                ...state,
                surname: action.payload
            }
        case 'SET_USERNAME':
            return {
                ...state,
                userName: action.payload.userName
            }
        default:
            return state
    }
}

export default reducer;