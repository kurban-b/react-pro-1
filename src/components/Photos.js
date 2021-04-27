import React from 'react';
import Search from "./Search";
import {useSelector} from "react-redux";
import Photo from "./Photo";

function Photos() {
    const photos = useSelector(state => state.photos.photos);
    const selectedId = useSelector(state => state.albums.selectedId);
    const filter = useSelector(state => state.photos.filter)

    const filtered = photos
        .filter(item => item.albumId === selectedId)
        .filter(item => {
            return item.title.indexOf(filter) > -1
        })


    if (selectedId === null) {
        return (
            <div className='checkAlboum'>
                &larr; Выберите альбом из списка
            </div>
        )
    }

    return (

        <div className='photos-wrap'>
            <Search />
            <div className="photos">
                { filtered.map( photo => {
                        return (
                            <Photo photo = {photo} key = {photo.id}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Photos;