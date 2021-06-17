CREATE DATABASE "giphy_search_favorites";
-- DATABASE WIREFRAME: https://lucid.app/lucidchart/b6123d9a-de7b-4f7e-94e6-833e1f293a31/edit?viewport_loc=-11%2C-11%2C3072%2C1545%2C0_0&invitationId=inv_d56c1f37-9a3a-4210-8524-f463205d58b0

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Favorite table
CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"gif_url" VARCHAR(255) NOT NULL,
	"category_id" INT REFERENCES "category"
);

-- Sample data model
INSERT INTO "favorites" ("gif_url", "category_id")
VALUES ('sample-gif-url.giphy', 1);


-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');
