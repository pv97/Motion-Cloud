json.extract! user, :id, :username, :videos

json.comments user.comments.each do |comment|
  json.extract! comment, :id, :user_id, :video_id, :parent_comment_id, :body
  json.age time_ago_in_words(comment.created_at)
  json.extract! comment.video, :title
end

json.videos user.videos.each do |video|
  json.extract! video, :id, :user_id, :title, :description, :view_count, :thumbnail_url
  json.age time_ago_in_words(video.created_at)
end
