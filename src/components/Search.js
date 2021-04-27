import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeFilter} from "../redux/actionss";

function Search(props) {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.photos.filter);


    function handleChangeSearch (e) {
        dispatch(changeFilter(e.target.value))
    }
    return (
        <div className='search'>
            <input
                type="text"
                placeholder='поиск'
                value={filter}
                onChange={handleChangeSearch}
            />
        </div>
    );
}

export default Search;