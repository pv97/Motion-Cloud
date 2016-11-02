json.extract! video, :id, :user_id, :title, :description, :url
json.age time_ago_in_words(video.created_at)
