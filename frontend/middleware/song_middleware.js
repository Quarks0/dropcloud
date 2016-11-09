import { FETCH_ALL_SONGS, FETCH_SONG, CREATE_SONG, DELETE_SONG, UPDATE_SONG, receiveAllSongs, receiveSong } from '../actions/song_actions';

import { fetchAllSongs, fetchSong, createSong, deleteSong, updateSong } from '../util/song_api_util';

export default ({getState, dispatch}) => next => action => {
  const fetchSongSuccess = song => dispatch(receiveSong(song));
  const fetchAllSongSuccess = songs => dispatch(receiveAllSongs(songs));
  const deleteSongSuccess = () => dispatch(fetchAllSongs());

  switch(action.type){
    case FETCH_ALL_SONGS:
      fetchAllSongs(fetchAllSongSuccess);
      return next(action);
    case FETCH_SONG:
      fetchSong(fetchSongSuccess);
      return next(action);
    case CREATE_SONG:
      createSong(action.song, fetchSongSuccess)
      return next(action);
    case DELETE_SONG:
      deleteSong(action.song.id, deleteSongSuccess)
      return next(action);
    case UPDATE_SONG:
      updateSong(action.song, fetchSongSuccess)
      return next(action);
    default:
      return next(action);
  }
};
