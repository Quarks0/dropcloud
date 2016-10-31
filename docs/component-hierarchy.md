## Component Hierarchy

**AuthFormContainer**
- AuthForm

**HomeContainer**
- Header Navigation
- Music Player
- Search

**SongsContainer**
- Song Index
	- Song Item

**SongContainer**
- Song info
- Comments

**NewSongContainer**
- Song form

**ProfileContainer**
- UserInfo
- Song Uploads Index
- Liked Songs Index
- Playlists Index

**PlaylistsContainer**
- Playlist Index
	-Playlist Item

**PlaylistContainer**
-Playlist contents

**NewPlaylistContainer**
- Playlist form

**SearchContainer**
- User results
- Track results
- Playlist results

**AudioContainer**
- Audio controls
- Current song info


## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "HomeContainer" |
| "/signup | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/songs" | SongsContainer |
| "/songs/:track_id" | SongContainer |
| "/users" | ProfileContainer |
| "/users/:user_id" | ProfileContainer |
| "/playlists" | PlaylistsContainer |
| "/playlists/:playlist_id" | PlaylistContainer |
| "/searchresults" | SearchContainer |
| "/newsong" | NewSongContainer |
| "/newplaylist" | NewPlaylistContainer |
