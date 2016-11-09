export const FETCH_ALL_SONGS = "FETCH_ALL_SONGS";
export const FETCH_SONG = "FETCH_SONG";
export const CREATE_SONG = "CREATE_SONG";
export const UPDATE_SONG = "UPDATE_SONG";
export const DELETE_SONG = "DELETE_SONG";
export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";

export const fetchAllSongs = () => ({
  type: FETCH_ALL_SONGS
});

export const fetchSong = id => ({
  type: FETCH_SONG,
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
