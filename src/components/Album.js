import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectId} from "../redux/actionss";

function Album(props) {
    const dispatch = useDispatch();
    const selectedId = useSelector(state => state.albums.selectedId);


    function handleSelectedId() {
        dispatch(selectId(props.album.id))
    }

    return (
        <li className={selectedId === props.album.id ? 'album active' : 'album'} onClick={handleSelectedId}>
            {props.album.title}
        </li>
    );
}

export default Album;