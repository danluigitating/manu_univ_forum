CREATE TABLE USERS (
    user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    username TEXT NOT NULL,
    first_name TEXT NOT NULL,
    middle_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

CREATE TABLE POSTS (
    post_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    content TEXT,
    user_id TINYTEXT NOT NULL,
    likes INTEGER,
    dislikes INTEGER
);

CREATE TABLE COMMENTS (
    comment_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    post_id INTEGER NOT NULL,
    content TEXT,
    user_id TINYTEXT NOT NULL,
    likes INTEGER,
    dislikes INTEGER
);

ALTER TABLE COMMENTS
ADD FOREIGN KEY (post_id) REFERENCES POSTS(post_id);

CREATE UNIQUE INDEX USERS_INDEX
ON USERS (user_id);

CREATE UNIQUE INDEX POSTS_INDEX
ON POSTS (post_id);

CREATE UNIQUE INDEX COMMENTS_INDEX
ON COMMENTS (comment_id, post_id, user_id);