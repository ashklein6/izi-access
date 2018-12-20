CREATE TABLE "access" (
    "id" SERIAL PRIMARY KEY,
    "access_level" INT,
    "access_type" VARCHAR(255)
);

CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR(255) UNIQUE,
    "username" VARCHAR (255) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "firstname" VARCHAR(255),
    "lastname" VARCHAR(255),
    "access_id" INT REFERENCES "access",
    "notes" VARCHAR(2560),
    "date_added" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "client_request" (
    "id" SERIAL PRIMARY KEY,
    "person_id" INT REFERENCES "person",
    "name" VARCHAR (256),
    "date" DATE DEFAULT ('1900-01-01 00:00:00.000'),
    "date_added" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "izi_categories" (
    "id" SERIAL PRIMARY KEY,
    "category" VARCHAR(256)
);

CREATE TABLE "threesixty" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(512),
    "date" DATE,
    "location" VARCHAR(255),
    "category_id" INT REFERENCES "izi_categories",
    "client" VARCHAR(255),
    "description" VARCHAR(25600),
    "published_status" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "analysis_recommendation" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_id" INT REFERENCES "threesixty",
    "findings" VARCHAR(25600),
    "recommendations" VARCHAR(25600)
);

CREATE TABLE "dashboard" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_id" INT REFERENCES "threesixty",
    "row_title" VARCHAR(25600),
    "row_info" VARCHAR(25600),
    "private" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "goals" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_id" INT REFERENCES "threesixty",
    "description" VARCHAR(25600),
    "desired" INT,
    "delivered" INT,
    "difference" INT,
    "percent" INT,
    "comments" VARCHAR(25600)
);

CREATE TABLE "threesixty_reports" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_id" INT REFERENCES "threesixty",
    "demographic" VARCHAR(25600),
    "summary" VARCHAR(25600),
    "methodology" VARCHAR(25600)
);

CREATE TABLE "oral_report" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_reports_id" INT REFERENCES "threesixty_reports",
    "group_num" INT,
    "response" VARCHAR(25600)
);

CREATE TABLE "response_category" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255)
);
    
CREATE TABLE "question_set" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_id" INT REFERENCES "threesixty_reports",
    "set_title" VARCHAR(25600),
    "breakdown" VARCHAR(25600)
);

CREATE TABLE "questions" (
    "id" SERIAL PRIMARY KEY,
    "set_id" INT REFERENCES "question_set",
    "question" VARCHAR(25600)
);

CREATE TABLE "response" (
    "id" SERIAL PRIMARY KEY,
    "question_id" INT REFERENCES "questions",
    "response" VARCHAR(25600),
    "category_id" INT REFERENCES "response_category"
);

CREATE TABLE "demographic" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_id" INT REFERENCES "threesixty",
    "ethnicity" VARCHAR(25600),
    "passion" VARCHAR(25600),
    "profession" VARCHAR(25600),
    "generation" VARCHAR(25600),
    "referral" VARCHAR(25600),
    "comments" VARCHAR(25600),
    "plans_to_tell" BOOLEAN DEFAULT FALSE,
    "first_time" BOOLEAN DEFAULT FALSE,
    "child_abuse" BOOLEAN DEFAULT FALSE,
    "housing" BOOLEAN DEFAULT FALSE,
    "transportation" BOOLEAN DEFAULT FALSE,
    "education" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "circle_share" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_reports_id" INT REFERENCES "threesixty_reports",
    "question" VARCHAR(25600),
    "responses" VARCHAR(25600)
);

CREATE TABLE "threesixty_user" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "person",
    "threesixty_id" INT REFERENCES "threesixty"
);
