import React from 'react';
import {useSelector} from "react-redux";
import Album from "./Album";


function Albums() {
    const albums = useSelector(state => state.albums.albums)


    return (
        <div className='albums'>
            <h2 className='title'>Список альбомов</h2>
            <ul>
                {albums.map((album)=>{
                    return <Album album = {album} key = {album.id}/>
                })}
            </ul>
        </div>

    );
}

export default Albums;