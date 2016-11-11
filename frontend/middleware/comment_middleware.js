import { receiveAllSongs, receiveSong } from '../actions/song_actions';
import { CREATE_COMMENT, DELETE_COMMENT , receiveComment} from '../actions/comment_actions';

import { createComment, deleteComment} from '../util/comment_api_util';
import { fetchAllSongs, fetchSong } from '../util/song_api_util';

export default ({dispatch}) => next => action => {
  const fetchCommentSuccess = song => dispatch(receiveSong(song));
  const deleteCommentSuccess = song => dispatch(receiveComment(song));

  switch(action.type){
    case CREATE_COMMENT:
      createComment(action.comment, fetchCommentSuccess);
      return next(action);
    case DELETE_COMMENT:
      deleteComment(action.id, deleteCommentSuccess);
      return next(action);
    default:
      return next(action);
  }
};
