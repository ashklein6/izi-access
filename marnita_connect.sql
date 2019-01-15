CREATE TABLE "access" (
    "id" SERIAL PRIMARY KEY,
    "access_type" VARCHAR(255)
);

CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR(255) UNIQUE,
    "username" VARCHAR (255) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "password_reset_token" VARCHAR (255),
    "password_reset_expires" TIMESTAMP WITH TIME ZONE,
    "firstname" VARCHAR(255),
    "lastname" VARCHAR(255),
    "access_id" INT DEFAULT 2 REFERENCES "access",
    "notes" VARCHAR(2560),
    "date_added" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "client_request" (
    "id" SERIAL PRIMARY KEY,
    "person_id" INT REFERENCES "person" ON DELETE CASCADE,
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
	"published_status" BOOLEAN DEFAULT FALSE,
	"analysis_recommendation_public" BOOLEAN DEFAULT TRUE NOT NULL,
	"threesixty_reports_public" BOOLEAN DEFAULT TRUE NOT NULL,
	"dashboard_public" BOOLEAN DEFAULT FALSE NOT NULL,
	"goals_public" BOOLEAN DEFAULT TRUE NOT NULL,
	"demographics_public" BOOLEAN DEFAULT FALSE NOT NULL,
	"oral_report_public" BOOLEAN DEFAULT TRUE NOT NULL,
	"question_set_public" BOOLEAN DEFAULT TRUE NOT NULL,
	"circle_share_public" BOOLEAN DEFAULT TRUE NOT NULL,
	"threesixty_freeform_public" BOOLEAN DEFAULT FALSE NOT NULL,
	"freeform_public" BOOLEAN DEFAULT FALSE NOT NULL,
    "upload_public" BOOLEAN DEFAULT TRUE NOT NULL,
	"analysis_recommendation_published" BOOLEAN DEFAULT TRUE NOT NULL,
	"threesixty_reports_published" BOOLEAN DEFAULT TRUE NOT NULL,
	"dashboard_published" BOOLEAN DEFAULT TRUE NOT NULL,
	"goals_published" BOOLEAN DEFAULT TRUE NOT NULL,
	"demographics_published" BOOLEAN DEFAULT TRUE NOT NULL,
	"oral_report_published" BOOLEAN DEFAULT TRUE NOT NULL,
	"question_set_published" BOOLEAN DEFAULT TRUE NOT NULL,
	"circle_share_published" BOOLEAN DEFAULT TRUE NOT NULL,
	"threesixty_freeform_published" BOOLEAN DEFAULT FALSE NOT NULL,
	"freeform_published" BOOLEAN DEFAULT FALSE NOT NULL,
    "upload_published" BOOLEAN DEFAULT TRUE NOT NULL
);

CREATE TABLE "analysis_recommendation" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_id" INT REFERENCES "threesixty" ON DELETE CASCADE,
    "findings" VARCHAR(25600),
    "recommendations" VARCHAR(25600)
);

CREATE TABLE "dashboard" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_id" INT REFERENCES "threesixty" ON DELETE CASCADE,
    "row_title" VARCHAR(25600),
    "row_info" VARCHAR(25600)
);

CREATE TABLE "goals" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_id" INT REFERENCES "threesixty" ON DELETE CASCADE,
    "description" VARCHAR(25600),
    "desired" INT,
    "delivered" INT,
    "difference" INT,
    "percent" INT,
    "comments" VARCHAR(25600),
    "row_public" BOOLEAN DEFAULT TRUE
);

CREATE TABLE "threesixty_reports" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_id" INT REFERENCES "threesixty" ON DELETE CASCADE,
    "demographic" VARCHAR(25600),
    "summary" VARCHAR(25600),
    "methodology" VARCHAR(25600)
);

CREATE TABLE "oral_report" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_reports_id" INT REFERENCES "threesixty_reports" ON DELETE CASCADE,
    "group_num" INT,
    "response" VARCHAR(25600)
);

CREATE TABLE "response_category" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(255)
);
    
CREATE TABLE "question_set" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_reports_id" INT REFERENCES "threesixty_reports" ON DELETE CASCADE,
    "set_title" VARCHAR(25600),
    "breakdown" VARCHAR(25600)
);

CREATE TABLE "questions" (
    "id" SERIAL PRIMARY KEY,
    "set_id" INT REFERENCES "question_set" ON DELETE CASCADE,
    "question" VARCHAR(25600)
);

CREATE TABLE "response" (
    "id" SERIAL PRIMARY KEY,
    "question_id" INT REFERENCES "questions" ON DELETE CASCADE,
    "response" VARCHAR(25600),
    "category_id" INT REFERENCES "response_category"
);

CREATE TABLE "ethnic_category" (
	"id" SERIAL PRIMARY KEY,
	"ethnicity" VARCHAR(100)
);

CREATE TABLE "gen_category" (
	"id" SERIAL PRIMARY KEY,
	"generation" VARCHAR(100)
);

CREATE TABLE "demographic" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_id" INT REFERENCES "threesixty" ON DELETE CASCADE,
    "ethnicity" VARCHAR(25600),
    "ethnic_category" INT DEFAULT 1 REFERENCES "ethnic_category",
    "passion" VARCHAR(25600),
    "profession" VARCHAR(25600),
    "gen_category" INT DEFAULT 1 REFERENCES "gen_category",
    "referral" VARCHAR(25600),
    "comments" VARCHAR(25600),
    "plans_to_tell" BOOLEAN DEFAULT FALSE,
    "first_time" BOOLEAN DEFAULT FALSE,
    "child_abuse" BOOLEAN DEFAULT FALSE,
    "housing" BOOLEAN DEFAULT FALSE,
    "transportation" BOOLEAN DEFAULT FALSE,
    "education" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "freeform" (
	"id" SERIAL PRIMARY KEY,
	"threesixty_id" INT REFERENCES "threesixty" ON DELETE CASCADE,
	"title" VARCHAR(800),
	"content" VARCHAR(25600),
	"row_public" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "upload" (
	"id" SERIAL PRIMARY KEY,
	"threesixty_id" INT REFERENCES "threesixty" ON DELETE CASCADE,
	"title" VARCHAR(800),
	"url" VARCHAR(25600)
);

CREATE TABLE "circle_share" (
    "id" SERIAL PRIMARY KEY,
    "threesixty_reports_id" INT REFERENCES "threesixty_reports" ON DELETE CASCADE,
    "question" VARCHAR(25600),
    "responses" VARCHAR(25600)
);

CREATE TABLE "threesixty_freeform" (
	"id" SERIAL PRIMARY KEY,
	"threesixty_reports_id" INT REFERENCES "threesixty_reports" ON DELETE CASCADE,
	"title" VARCHAR(800),
	"content" VARCHAR(25600),
	"row_public" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "threesixty_user" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "person" ON DELETE CASCADE,
    "threesixty_id" INT REFERENCES "threesixty" ON DELETE CASCADE
);
