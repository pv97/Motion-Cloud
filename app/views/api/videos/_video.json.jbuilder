json.extract! video, :title, :description, :url
json.age time_ago_in_words(video.created_at)
