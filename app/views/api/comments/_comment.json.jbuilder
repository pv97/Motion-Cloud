json.extract! comment, :id, :user_id, :video_id, :parent_comment_id, :body
json.age time_ago_in_words(comment.created_at)
json.user comment.user.username
json.child_comments comment.child_comments.each do |comment|
  json.set! comment.id do
    json.partial! 'comment', comment: comment
  end
end
