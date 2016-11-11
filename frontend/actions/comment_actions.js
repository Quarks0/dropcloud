export const CREATE_COMMENT = "CREATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS"
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const createComment = comment => ({
  type: CREATE_COMMENT,
  comment
});

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});

export const receiveComment = song => ({
  type: RECEIVE_COMMENT,
  song
});

export const clearCommentErrors = () => ({
  type: CLEAR_COMMENT_ERRORS
});

export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});
