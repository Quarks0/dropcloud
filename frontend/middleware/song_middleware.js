import { REQUEST_ALL_SONGS, REQUEST_SONG, CREATE_SONG, DELETE_SONG, UPDATE_SONG, receiveAllSongs, receiveSong } from '../actions/song_actions';

import { fetchAllSongs, fetchSong, createSong, deleteSong, updateSong } from '../util/song_api_util';

export default ({dispatch}) => next => action => {
  const fetchAllSongSuccess = songs => dispatch(receiveAllSongs(songs));
  const fetchSongSuccess = song => dispatch(receiveSong(song));
  const deleteSongSuccess = () => dispatch(fetchAllSongs());

  switch(action.type){
    case REQUEST_ALL_SONGS:
      fetchAllSongs(fetchAllSongSuccess);
      return next(action);
    case REQUEST_SONG:
      fetchSong(action.id,fetchSongSuccess);
      return next(action);
    case CREATE_SONG:
      createSong(action.song, fetchSongSuccess)
      return next(action);
    case DELETE_SONG:
      deleteSong(action.id, deleteSongSuccess)
      return next(action);
    case UPDATE_SONG:
      updateSong(action.song, fetchSongSuccess)
      return next(action);
    default:
      return next(action);
  }
};
