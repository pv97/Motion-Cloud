# MotionCloud

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com

[trello]: https://trello.com/b/kCORyr4I/motion-cloud

## Minimum Viable Product

MotionCloud is a web application inspired by SoundCloud built using Ruby on Rails
and React/Redux. Instead of a music player, a video player will pop up on the left
half of the screen and persistently play across pages. Comments/details can be
viewed by hovering left of the video section.

By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Streaming Videos
- [ ] Uploading Videos
- [ ] Comments
- [ ] One page streaming layout
- [ ] Infinite Scroll
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: /docs/wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Videos Model, API, and components (4 days)

**Objective:** Videos can be uploaded and destroyed through the API. Details can
  be seen on a separate component. Set up connection to Cloudinary.

### Phase 3: Comments (1 days)

**Objective:** Comments can be made on videos.

### Phase 4: One Page Layout (2 days, W2 Th 6pm)

**objective:** Allow video to be streamed at any route, do conditional styling.
  View counter for videos.

### Phase 5: - Infinite scroll for Videos/Comments Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Videos/Comments Index

### Bonus Features (TBD)
- [ ] Option to (dis)like a video/comment
- [ ] Option to add videos to queue
