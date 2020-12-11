SELECT * FROM goals;

/* if NEW = true */

INSERT INTO goals ("threesixty_id", "description", "desired", "delivered", "difference", "percent", "comments", "row_public")
VALUES (
	$1,
	$2,
	$3,
	$4,
	$5,
	$6,
	$7,
	$8
	)
;


/* if UPDATED = true */

UPDATE goals
SET threesixty_id = $2,
	description = $3, 
	desired = $4, 
	delivered = $5, 
	difference = $6, 
	percent = $7, 
	comments = $8
WHERE id = {goals.id}
;


/* if DELETE */

DELETE FROM goals
WHERE id = {goals.id}
;



SELECT * FROM threesixty;

/* if NEW = true */

/* 
COLUMNS MISSING:
	-published_status (default = false)
	-all table_public and table_published columns (set in EDIT after they are created)
*/

INSERT INTO threesixty ("name", "date", "location", "category_id", "client", "description",)
VALUES (
	$1,
	$2,
	$3,
	$4,
	$5,
	$6
	)
;


/* if UPDATED = true */

UPDATE threesixty
SET name = $1,
	date = $2, 
	location = $3, 
	category_id = $4, 
	client = $5, 
	description = $6, 
	published_status = $7,
	analysis_recommendation_public = $8,
	threesixty_reports_public = $9,
	dashboard_public = $10,
	goals_public = $11,
	demographics_public = $12,
	oral_report_public = $13,
	question_set_public = $14,
	circle_share_public = $15,
	threesixty_freeform_public = $16,
	freeform_public = $17,
	upload_public = $18,
	analysis_recommendation_published = $19,
	threesixty_reports_published = $20,
	dashboard_published = $21,
	goals_published = $22,
	demographics_published = $23,
	oral_report_published = $24,
	question_set_published = $25,
	circle_share_published = $26,
	threesixty_freeform_publishe = $27,
	freeform_published = $28,
	upload_published = $29
WHERE id = {threesixty.id}
;


/* if DELETE */

DELETE FROM threesixty
WHERE id = {threesixty.id}
;



SELECT * FROM analysis_recommendation;

/* if NEW = true */

/*
threesixty_id assumption: will not be entered, but referenced server-side
*/

INSERT INTO analysis_recommendation ("threesixty_id", "findings", "recommendations")
VALUES (
	$1,
	$2,
	$3
	)
;


/* if UPDATED = true */

UPDATE analysis_recommendation
SET findings = $1,
	recommendations = $2
WHERE id = {analysis_recommendation.id}
;


/* if DELETE */

DELETE FROM analysis_recommendation
WHERE id = {analysis_recommendation.id}
;



SELECT * FROM threesixty_reports;

/* if NEW = true */

/*
threesixty_id assumption: will not be entered, but referenced server-side
*/

INSERT INTO threesixty_reports ("threesixty_id", "demographic", "summary", "methodology")
VALUES (
	$1,
	$2,
	$3,
	$4
	)
;


/* if UPDATED = true */

UPDATE threesixty_reports
SET demographic = $1,
	summary = $2,
	methodology = $3
WHERE id = {threesixty.id}
;


/* if DELETE */

DELETE FROM threesixty_reports
WHERE id = {threesixty_reports.id}
;



SELECT * FROM dashboard;

/* if NEW = true */

/*
threesixty_id assumption: will not be entered, but referenced server-side
*/

INSERT INTO dashboard ("threesixty_id", "row_title", "row_info", "row_public")
VALUES (
	$1,
	$2,
	$3,
	$4
	)
;


/* if UPDATED = true */

UPDATE dashboard
SET row_title = $1,
	row_info = $2,
	row_public = $3
WHERE id = {dashboard.id}
;


/* if DELETE */

DELETE FROM dashboard
WHERE id = {dashboard.id}
;



SELECT * FROM demographic;

/* if NEW = true */

/*
threesixty_id assumption: will not be entered, but referenced server-side
*/

INSERT INTO demographic ("threesixty_id", "ethnicity", "ethnic_category", "passion", "profession", "gen_category", "referral", "comments", "plans_to_tell", "first_time", "child_abuse", "housing", "transportation", "education")
VALUES (
	$1,
	$2,
	$3,
	$4,
	$5,
	$6,
	$7,
	$8,
	$9,
	$10,
	$11,
	$12,
	$13,
	$14
	)
;


/* if UPDATED = true */

UPDATE demographic
SET ethnicity = $1,
	ethnic_category = $2,
	passion = $3,
	profession = $4,
	gen_category = $5,
	referral = $6,
	comments = $7,
	plans_to_tell = $8,
	first_time = $9,
	child_abuse = $10,
	housing = $11,
	transportation = $12,
	education = $13
WHERE id = {demographic.id}
;


/* if DELETE */

DELETE FROM demographic
WHERE id = {demographic.id}
;



SELECT * FROM freeform;

/* if NEW = true */

/*
threesixty_id assumption: will not be entered, but referenced server-side
*/

INSERT INTO freeform ("threesixty_id", "title", "content", "row_public")
VALUES (
	$1,
	$2,
	$3,
	$4
	)
;


/* if UPDATED = true */

UPDATE freeform
SET title = $1,
	content = $2,
	row_public = $3
WHERE id = {freeform.id}
;


/* if DELETE */

DELETE FROM freeform
WHERE id = {freeform.id}
;



SELECT * FROM upload;

/* if NEW = true */

/*
threesixty_id assumption: will not be entered, but referenced server-side
*/

INSERT INTO upload ("threesixty_id", "title", "url")
VALUES (
	$1,
	$2,
	$3
	)
;


/* if UPDATED = true */

UPDATE upload
SET title = $1,
	url = $2
WHERE id = {upload.id}
;


/* if DELETE */

DELETE FROM upload
WHERE id = {upload.id}
;



SELECT * FROM oral_report;

/* if NEW = true */

/*
threesixty_reports_id assumption: will not be entered, but referenced server-side
*/

INSERT INTO oral_report ("threesixty_reports_id", "group_num", "response")
VALUES (
	$1,
	$2,
	$3
	)
;


/* if UPDATED = true */

UPDATE oral_report
SET group_num = $1,
	response = $2
WHERE id = {oral_report.id}
;


/* if DELETE */

DELETE FROM oral_report
WHERE id = {oral_report.id}
;



SELECT * FROM question_set;

/* if NEW = true */

/*
threesixty_reports_id assumption: will not be entered, but referenced server-side
*/

INSERT INTO question_set ("threesixty_reports_id", "set_title", "breakdown")
VALUES (
	$1,
	$2,
	$3
	)
;


/* if UPDATED = true */

UPDATE question_set
SET set_title = $1,
	breakdown = $2
WHERE id = {question_set.id}
;


/* if DELETE */

DELETE FROM question_set
WHERE id = {question_set.id}
;



SELECT * FROM questions;

/* if NEW = true */

/*
set_id assumption: will not be entered, but referenced server-side
*/

INSERT INTO questions ("set_id", "question")
VALUES (
	$1,
	$2
	)
;


/* if UPDATED = true */

UPDATE questions
SET question = $1
WHERE id = {questions.id}
;


/* if DELETE */

DELETE FROM questions
WHERE id = {questions.id}
;



SELECT * FROM response;

/* if NEW = true */

/*
question_id assumption: will not be entered, but referenced server-side
*/

INSERT INTO response ("question_id", "response", "category_id")
VALUES (
	$1,
	$2,
	$3
	)
;


/* if UPDATED = true */

UPDATE response
SET response = $1
	category_id = $2
WHERE id = {response.id}
;


/* if DELETE */

DELETE FROM response
WHERE id = {response.id}
;



SELECT * FROM circle_share;

/* if NEW = true */

/*
threesixty_reports_id assumption: will not be entered, but referenced server-side
*/

INSERT INTO circle_share ("threesixty_reports_id", "question", "responses")
VALUES (
	$1,
	$2,
	$3
	)
;


/* if UPDATED = true */

UPDATE circle_share
SET question = $1,
	responses = $2
WHERE id = {circle_share.id}
;


/* if DELETE */

DELETE FROM circle_share
WHERE id = {circle_share.id}
;



SELECT * FROM threesixty_freeform;

/* if NEW = true */

/*
threesixty_reports_id assumption: will not be entered, but referenced server-side
*/

INSERT INTO threesixty_freeform ("threesixty_reports_id", "title", "content", "row_public")
VALUES (
	$1,
	$2,
	$3,
	$4
	)
;


/* if UPDATED = true */

UPDATE threesixty_freeform
SET title = $1,
	content = $2,
	row_public = $3
WHERE id = {threesixty_freeform.id}
;


/* if DELETE */

DELETE FROM threesixty_freeform
WHERE id = {threesixty_freeform.id}
;



SELECT * FROM threesixty_user;

/* if NEW = true */

INSERT INTO threesixty_user ("user_id", "threesixty_id")
VALUES (
	$1,
	$2
	)
;


/* if UPDATED = true */

UPDATE threesixty_user
SET user_id = $1,
	threesixty_id = $2
WHERE id = {threesixty_user.id}
;


/* if DELETE */

DELETE FROM threesixty_user
WHERE id = {threesixty_user.id}
;