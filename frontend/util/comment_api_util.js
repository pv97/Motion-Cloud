
export const fetchComments = (videoId, success, error) => {
  $.ajax({
    url: `api/videos/${videoId}/comments`,
    success,
    error
  });
};

export const fetchComment = (id, success, error) => {
  $.ajax({
    url: `api/comments/${id}`,
    success,
    error
  });
};

export const createComment = (comment, success, error) => {
  $.ajax({
    url: "api/comments",
    type: "POST",
    data: { comment },
    success,
    error
  });
};

export const updateComment = (comment, success, error) => {
  $.ajax({
    url: `api/comments/${comment.id}`,
    type: "PATCH",
    data: { comment },
    success,
    error
  });
};

export const deleteComment = (id, success, error) => {
  $.ajax({
    url: `api/comments/${id}`,
    type: "DELETE",
    success,
    error
  });
};
