import React from 'react';

function Photo(props) {

    return (
        <div className='photo' >
            <img src={props.photo.thumbnailUrl} alt=""/>
            <div className="title">
                {props.photo.title}
            </div>
        </div>
    );
}

export default Photo;