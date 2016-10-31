# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## videos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
url         | string    | not null
description | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
archived    | boolean   | not null, default: false

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
video_id    | integer   | not null, foreign key (references notes), indexed
body        | text      | not null
name        | string    | not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
parent_id   | integer   | not null, foreign key (references notes), indexed
user_id     | integer   | not null, foreign key (references notes), indexed, unique [parent_id x user_id]
