json.extract! video, :id, :user_id, :title, :description, :url, :thumbnail_url, :view_count
json.user video.user.username
json.age time_ago_in_words(video.created_at)
