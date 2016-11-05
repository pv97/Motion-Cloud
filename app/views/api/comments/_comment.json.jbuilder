json.extract! comment, :id, :user_id, :video_id, :parent_comment_id, :body, :user
json.age time_ago_in_words(video.created_at)
