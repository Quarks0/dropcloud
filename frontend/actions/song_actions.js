export const REQUEST_ALL_SONGS = "REQUEST_ALL_SONGS";
export const REQUEST_SONG = "REQUEST_SONG";
export const CREATE_SONG = "CREATE_SONG";
export const UPDATE_SONG = "UPDATE_SONG";
export const DELETE_SONG = "DELETE_SONG";
export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";
export const CLEAR_ERRORS = "CLEAR_ERRORS"

export const requestAllSongs = () => ({
  type: REQUEST_ALL_SONGS
});

export const requestSong = id => ({
  type: REQUEST_SONG,
  id
});

export const createSong = song => ({
  type: CREATE_SONG,
  song
});

export const updateSong = song => ({
  type: UPDATE_SONG,
  song
});

export const deleteSong = id => ({
  type: DELETE_SONG,
  id
});

export const receiveAllSongs = songs => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
