export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENT = "FETCH_COMMENT";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_REPLY = "RECEIVE_REPLY";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const CREATE_REPLY = "CREATE_REPLY";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

export const fetchComments = (videoId) => ({
  type: FETCH_COMMENTS,
  videoId
});

export const fetchComment = id => ({
  type: FETCH_COMMENT,
  id
});

export const createComment = comment => ({
  type: CREATE_COMMENT,
  comment
});

export const createReply = reply => ({
  type: CREATE_REPLY,
  reply
});

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});

export const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveReply = reply => ({
  type: RECEIVE_REPLY,
  reply
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});
