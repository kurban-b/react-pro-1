import React from 'react';
import {useDispatch} from "react-redux";
import {selectId} from "../redux/actionss";

function Album(props) {
    const dispatch = useDispatch();

    function handleSelectedId() {
        dispatch(selectId(props.album.id))
    }

    return (
        <li className='album' onClick={handleSelectedId}>
            {props.album.title}
        </li>
    );
}

export default Album;