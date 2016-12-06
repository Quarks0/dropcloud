export const PLAY_SONG = 'PLAY_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const CLEAR_SONG = 'CLEAR_SONG';

export const playSong = (song) => ({
  type: PLAY_SONG,
  song
});

export const pauseSong = () => ({
  type: PAUSE_SONG
});

export const clearSong = () => ({
  type: CLEAR_SONG
});
