export function loadAlbums () {
    return function (dispatch) {
        dispatch({
            type: 'albums/loading/start'
        })
        fetch('https://jsonplaceholder.typicode.com/albums/?_limit=15')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'albums/loading/end',
                    payload: json
                })
            })
    }
}

export function loadPhotos() {

    return function (dispatch){
        dispatch({
            type: 'photos/loading/start'
        })
        fetch('https://jsonplaceholder.typicode.com/photos/?_limit=750')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'photos/loading/end',
                    payload: json
                })
            })
    }
}

export function selectId(id) {
    return {
        type: 'albums/selected/change',
        payload: id
    }
}

export function changeFilter(value) {
    return {
        type: 'photos/filter/change',
        payload: value
    }
}