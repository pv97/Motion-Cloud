json.extract! video, :id, :user_id, :title, :description, :url, :thumbnail_url, :user, :view_count
json.age time_ago_in_words(video.created_at)
