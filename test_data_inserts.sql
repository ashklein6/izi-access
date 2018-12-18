INSERT INTO izi_categories ("category")
VALUES 
    ('Public Health'),
    ('Mental Health'), 
    ('Community'), 
    ('Education');

INSERT INTO response_category (description)
VALUES 
	('description in response_category table');

INSERT INTO access ("access_level", "access_type")
VALUES
	(10, 'User'),
	(20, 'Client'),
	(30, 'Employee'),
	(40, 'Admin');

INSERT INTO threesixty ("name", "date", "location", "category_id", "client", "published_status")
VALUES (
	'Catalyst Initiative of The Minneapolis Foundation - Building Initiative: Preventing Diseases of Despair', 
	'9-18-2018', 
	'Minneapolis', 
	2, 
	'MTI', 
	false
);

INSERT INTO threesixty ("name", "date", "location", "category_id", "client", "published_status")
VALUES (
	'Carver County Public Health - A Healthy Welcome', 
	'10-4-2018', 
	'Chaska', 
	1, 
	'MTI', 
	false
);

INSERT INTO person ("email", "username", "password", "firstname", "lastname", "access_id", "notes", "date_added")
VALUES (
	'janedoe@marnitaconnect.com',
	'janedoe',
	'password',
	'Jane',
	'Doe',
	2,
	'Very interested in public health',
	'12-18-2018'
);

INSERT INTO person ("email", "username", "password", "firstname", "lastname", "access_id", "notes", "date_added")
VALUES (
	'adminn@marnitaconnect.com',
	'adamdouglasminn',
	'secret',
	'Adam',
	'Minn',
	4,
	'Admin priveleges required',
	'12-17-2018'
);

INSERT INTO person ("email", "username", "password", "firstname", "lastname", "access_id", "notes", "date_added")
VALUES (
	'cian1234@email.com',
	'marnitafan1234',
	'1234',
	'Cybill',
	'Ian',
	1,
	'Community is my priority',
	'12-19-2018'
);

INSERT INTO threesixty_user ("user_id", "threesixty_id")
VALUES
	(1, 2);

INSERT INTO goals (threesixty_id, description, desired, delivered, difference, percent, comments)
VALUES (
	'1', 
	'goals table description', 
	'100', 
	'80', 
	'20', 
	'80', 
	'goals table comments'
);

INSERT INTO dashboard (threesixty_id, row_title, row_info, private)
VALUES (
	'1', 
	'row_title dashboard table', 
	'row_info dashboard table', 
	false);

INSERT INTO analysis_recommendation (threesixty_id, findings, recommendations)
VALUES (
	'1', 
	'findings in an_rec table', 
	'recommendations in an_rec table');

INSERT INTO demographic (threesixty_id, ethnicity, passion, profession, generation, referral, comments, plans_to_tell, first_time, child_abuse, housing, transportation, education)
VALUES (
	'1', 
	'Hispanic', 
	'Family', 
	'Nurse', 
	'Gen X', 
	'Marge Simpson', 
	'I am excited to come to the next izi!', 
	true, 
	true, 
	false, 
	true, 
	false, 
	true
);

INSERT INTO threesixty_reports (threesixty_id, demographic, summary, methodology, data_agg, oral_report)
VALUES (
	'1', 
	'Hispanic (demographic)', 
	'amazing! (summary)', 
	'direct instruction (methodology', 
	'lots of numbers (data_agg)', 
	'the things that were said (oral_report)'
);

INSERT INTO oral_report (threesixty_reports_id, group_num, response)
VALUES (
	'1', 
	'5', 
	'it was fun! (oral_report response)'
);

INSERT INTO questions (set_id, threesixty_reports_id, question, blurb, breakdown)
VALUES (
	'1', 
	'1', 
	'question from questions table', 
	'blurb from questions table', 
	'breakdown from questions table'
);

INSERT INTO circle_share (threesixty_reports_id, question, responses)
VALUES (
	'1', 
	'circle_share question', 
	'circle_share responses'
);

INSERT INTO response (question_id, response, category_id)
VALUES (
	'1', 
	'response in response table', 
	'1'
);

