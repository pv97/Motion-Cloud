# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Videos

- `GET /api/videos`
  - Videos index/search
- `POST /api/videos`
- `GET /api/videos/:id`
- `PATCH /api/videos/:id`
- `DELETE /api/videos/:id`

### Comments

- A videos' comments will be included in the videos'/user's show template
- `GET /api/videos/:video_id/comments`
- `GET /api/users/:user_id/comments`
- `POST /api/videos/:video_id/comments`
- `DELETE /api/videos/:video_id/comments/:id`

### Likes
- `POST /api/videos/:video_id/comments`
- `DELETE /api/videos/:video_id/comments/:id`
- `POST /api/comments/:comment_id/comments`
- `DELETE /api/comments/:comment_id/comments/:id`
