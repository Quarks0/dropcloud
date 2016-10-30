#API Endpoints

##HTML API
###Root
- `get /`

##JSON API
###Users
- `get /api/users/:id`
- `post /api/users`
- `patch /api/users`

###Session
- `post /api/session`
- `delete /api/session`
- `get /api/session`

###Songs
- `get /api/songs`
- `get /api/song/:id`
- `post /api/songs`
- `patch /api/song/:id`
- `delete /api/song/:id`

###Playlists
- `get /api/playlists`
- `get /api/playlist/:id`
- `post /api/playlists`
- `patch /api/playlist/:id`
- `delete /api/playlist/:id`

###Comments
- `get /api/song/:id/comments`
- `post /api/song/:id/comments`
- `delete /api/song/:id/comment/:comment_id`

###Messages
- `get /api/user/:id/messages`
- `post /api/user/:id/messages`
- `delete /api/user/:id/message/:message_id`
