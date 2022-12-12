// Reducer for toggling view mode - day or night
const mode = localStorage.getItem('mode')

const modeReducer = (state = mode ? mode : 'day', action) => {
    switch (action.type) {
        case 'update':
            localStorage.setItem('mode', action.payload)
            return action.payload
        default:
            return state
    }
}

export default modeReducer