const initialState = {
    filter: '',
    photos: [],
    loading: false
}

const photos = (state = initialState, action) => {
    switch (action.type) {
        case 'photos/loading/start':
            return {
                ...state,
                loading: true
            }

        case 'photos/loading/end':
            return {
                ...state,
                loading: false,
                photos: action.payload
            }
        case 'photos/filter/change':
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state;
    }
}

export default photos;