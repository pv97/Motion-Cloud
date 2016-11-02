
export const fetchVideos = (success, error) => {
  $.ajax({
    url: "api/videos",
    success,
    error
  });
};

export const fetchVideo = (id, success, error) => {
  $.ajax({
    url: `api/videos/${id}`,
    success,
    error
  });
};

export const createVideo = (video, success, error) => {
  $.ajax({
    url: "api/videos",
    type: "POST",
    data: { video },
    success,
    error
  });
};

export const updateVideo = (video, success, error) => {
  $.ajax({
    url: `api/videos/${video.id}`,
    type: "PATCH",
    data: { video },
    success,
    error
  });
};

export const deleteVideo = (id, success, error) => {
  $.ajax({
    url: `api/videos/${id}`,
    type: "DELETE",
    success,
    error
  });
};
