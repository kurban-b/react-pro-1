const initialState = {
    albums: [],
    selectedId: null,
    loading: false
}

const albums = (state = initialState, action) => {
    switch (action.type) {
        case 'albums/loading/start':
            return {
                ...state,
                loading: true
            }

        case 'albums/loading/end':
            return {
                ...state,
                albums: action.payload,
                loading: false
            }
        case 'albums/selected/change':
            return {
                ...state,
                selectedId: action.payload
            }
        default:
            return state;
    }
}

export default albums;