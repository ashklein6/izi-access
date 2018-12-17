CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY,
    "category" VARCHAR(80)
);

CREATE TABLE "response_category" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255)
);

CREATE TABLE "access" (
    "id" SERIAL PRIMARY KEY,
    "access_level" INT,
    "access_type" VARCHAR(80)
);

CREATE TABLE "360" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80),
    "date" DATE,
    "location" VARCHAR(255),
    "category_id" INT REFERENCES "categories",
    "client" VARCHAR(255),
    "published_status" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "360_id" INT REFERENCES "360",
    "email" VARCHAR(80) UNIQUE,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "firstname" VARCHAR(80),
    "lastname" VARCHAR(80),
    "access_id" INT REFERENCES "access",
    "notes" VARCHAR(1000),
    "date_added" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "360_user" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "360_id" INT REFERENCES "360"
);

CREATE TABLE "goals" (
    "id" SERIAL PRIMARY KEY,
    "360_id" INT REFERENCES "360",
    "description" VARCHAR(255),
    "desired" INT,
    "delivered" INT,
    "difference" INT,
    "percent" INT,
    "comments" VARCHAR(500)
);

CREATE TABLE "dashboard" (
    "id" SERIAL PRIMARY KEY,
    "360_id" INT REFERENCES "360",
    "row_title" VARCHAR(80),
    "row_info" VARCHAR(255),
    "private" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "analysis_recommendation" (
    "id" SERIAL PRIMARY KEY,
    "360_id" INT REFERENCES "360",
    "findings" VARCHAR(255),
    "recommendations" VARCHAR(255)
);

CREATE TABLE "demographic" (
    "id" SERIAL PRIMARY KEY,
    "360_id" INT REFERENCES "360",
    "ethnicity" VARCHAR(80),
    "passion" VARCHAR(255),
    "profession" VARCHAR(80),
    "generation" VARCHAR(80),
    "referral" VARCHAR(80),
    "comments" VARCHAR(255),
    "plans_to_tell" BOOLEAN DEFAULT FALSE,
    "first_time" BOOLEAN DEFAULT FALSE,
    "child_abuse" BOOLEAN DEFAULT FALSE,
    "housing" BOOLEAN DEFAULT FALSE,
    "transportation" BOOLEAN DEFAULT FALSE,
    "education" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "360_reports" (
    "id" SERIAL PRIMARY KEY,
    "360_id" INT REFERENCES "360",
    "demographic" VARCHAR(80),
    "summary" VARCHAR(255),
    "methodology" VARCHAR(255),
    "data_agg" VARCHAR(255),
    "oral_report" VARCHAR(500)
);

CREATE TABLE "oral_report" (
    "id" SERIAL PRIMARY KEY,
    "360_reports_id" INT REFERENCES "360_reports",
    "group_num" INT,
    "response" VARCHAR(500)
);

CREATE TABLE "questions" (
    "id" SERIAL PRIMARY KEY,
    "set_id" INT,
    "360_reports_id" INT REFERENCES "360_reports",
    "question" VARCHAR(255),
    "blurb" VARCHAR(255),
    "breakdown" VARCHAR(255)
);

CREATE TABLE "circle_share" (
    "id" SERIAL PRIMARY KEY,
    "360_reports_id" INT REFERENCES "360_reports",
    "question" VARCHAR(255),
    "responses" VARCHAR(255)
);

CREATE TABLE "response" (
    "id" SERIAL PRIMARY KEY,
    "question_id" INT REFERENCES "questions",
    "response" VARCHAR(255),
    "category_id" INT REFERENCES "response_category"
);