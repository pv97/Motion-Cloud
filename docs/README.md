# MotionCloud

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://motioncloud.herokuapp.com/

[trello]: https://trello.com/b/kCORyr4I/motion-cloud

## Minimum Viable Product

MotionCloud is a web application built to be a hybrid of SoundCloud and Youtube
using Ruby on Rails and React/Redux. Instead of a music player, a video player
can persistently play across pages. Video comments can be viewed by clicking
left of the video section.

By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] New account creation, login, and guest/demo login
- [ ] Production README
- [ ] Hosting on Heroku

- [ ] Video CRUD
  + [ ] Adequate styling
  + [ ] Smooth, bug-free navigation
  + [ ] Adequate and appropriate seeds to demonstrate the feature

- [ ] Playing videos with continuous play
  + [ ] Adequate styling
  + [ ] Smooth, bug-free navigation

- [ ] Comments
  + [ ] Adequate styling
  + [ ] Smooth, bug-free navigation
  + [ ] Adequate and appropriate seeds to demonstrate the feature

- [ ] Users pages
  + [ ] Adequate styling
  + [ ] Smooth, bug-free navigation
  + [ ] Adequate and appropriate seeds to demonstrate the feature

- [ ] #bonus minimizable video player
  + [ ] Adequate styling
  + [ ] Smooth, bug-free navigation

- [ ] #bonus Video queue
  + [ ] Adequate styling
  + [ ] Smooth, bug-free navigation

- [ ] #bonus Likes
  + [ ] Adequate styling
  + [ ] Smooth, bug-free navigation
  + [ ] Adequate and appropriate seeds to demonstrate the feature



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

### Phase 2: Videos CRUD (2 days)

**Objective:** Videos can be uploaded and destroyed through the API.
  Set up connection to Cloudinary.

### Phase 3: Videos persistent player (2 days)

**Objective:** Videos and comments can be viewed persistently on any page.

### Phase 4: Comments (1 days)

**Objective:** Comments can be made on videos.

### Phase 5: Users Page (1 days, W2 Th 6pm)

**objective:** Allow video to be streamed at any route, do conditional styling.
  View counter for videos.


### Bonus Features (TBD)
- [ ] Option to (dis)like a video/comment
- [ ] Option to add videos to queue
- [ ] Option to add minimize video player
