
export const searchVideos = (string, success, error) => {
  $.ajax({
    url: `api/videos/search`,
    data: { search: string },
    success,
    error
  })
}
