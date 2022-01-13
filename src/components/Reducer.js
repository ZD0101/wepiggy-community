const Reducer = (state,action) => {
    switch(action.type) {
        case 'CONNECT':
            return {
                ...this.state,
                connected: action.payload
            }
        default: return state
    }
}

export default Reducer
