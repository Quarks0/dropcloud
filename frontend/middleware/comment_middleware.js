import { receiveAllSongs, receiveSong } from '../actions/song_actions';
import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';

import { createComment, deleteComment} from '../util/comment_api_util';
import { fetchAllSongs, fetchSong } from '../util/song_api_util';

export default ({dispatch}) => next => action => {
  const fetchCommentSuccess = song => dispatch(receiveSong(song));

  switch(action.type){
    case CREATE_COMMENT:
      createComment(action.comment, fetchCommentSuccess);
      return next(action);
    case DELETE_COMMENT:
      deleteComment(action.id, fetchCommentSuccess);
      return next(action);
    default:
      return next(action);
  }
};
