json.extract! comment, :id, :user_id, :video_id, :parent_comment_id, :body
json.age time_ago_in_words(comment.created_at)
json.user comment.user.username

json.child_comments comment.child_comments.each do |child_comment|
  json.extract! child_comment, :id, :user_id, :video_id, :parent_comment_id, :body
  json.age time_ago_in_words(child_comment.created_at)
  json.user child_comment.user.username
end
