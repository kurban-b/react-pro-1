import Albums from "./Albums";
import Photos from "./Photos";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadAlbums, loadPhotos} from "../redux/actionss";

function App() {
    const dispatch = useDispatch();
    const loadingAlbum = useSelector(state => state.albums.loading);
    const loadingPhoto = useSelector(state => state.photos.loading);



    useEffect(()=>{
        dispatch(loadAlbums())
        dispatch(loadPhotos())
    },[])

    if (loadingAlbum || loadingPhoto) {
        return (
            <div className='loading'>
                <h2>Загрузка</h2>
                <div className="loading_item"></div>
            </div>
        )
    }
  return (
    <div className='app'>
        <div className="wrapper">
          <Albums />
          <Photos />
        </div>
    </div>
  );
}

export default App;
