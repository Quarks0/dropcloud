{
  currentUser: {
    id: 1,
    username: "quarks0"
  },
  errors: {
    signUp: {errors: []},
    logIn: {errors: []},
    uploadSong: {errors: ["song must have a title"]}
  },
  song: {
    1: {
      title: "Revolution",
      artist: "Diplo",
      user_id: 1,
      url: "www.music.com/insertidhere",
      image_url: "www.music.com/insertimagehere",
      likes: 17
      }
    }
  },
  playlists: {
    1: {
      name: "drops so hard floor gives out",
      user_id: 1,
      playlistcontents: {
        1: {
          title: "Revolution",
          artist: "Diplo",
          user_id: 1,
          url: "www.music.com/insertidhere",
          image_url: "www.music.com/insertimagehere",
          likes: 17
        }
      }
    }
  }
  comments: {
    1: {
      song_id: 1,
      user_id: 1,
      body: "this is ripper"
    }
  }
  messages: {
    1: {
      sender_id: 1,
      receiver_id: 2,
      title: "new mixtape in the works",
      body: "I hope you're ready to hear some straight fire"
    }
  }
}
