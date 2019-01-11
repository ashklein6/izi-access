INSERT INTO access ("access_level", "access_type")
VALUES
	(10, 'User'),
	(20, 'Client'),
	(30, 'Employee'),
	(40, 'Admin'),
	(0, 'deactivated');

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

INSERT INTO client_request (person_id, name, date)
VALUES (
	3,
	'Cybill',
	'12-19-2018'
);

INSERT INTO izi_categories ("category")
VALUES 
    ('Public Health'),
    ('Mental Health'), 
    ('Community'), 
    ('Education');

INSERT INTO threesixty ("name", "date", "location", "category_id", "client", "description", "published_status", "analysis_recommendation_public", "threesixty_reports_public", "dashboard_public", "goals_public", "demographics_public", "oral_report_public", "question_set_public", "circle_share_public", "threesixty_freeform_public", "freeform_public", "upload_public", "analysis_recommendation_published", "threesixty_reports_published", "dashboard_published", "goals_published", "demographics_published", "oral_report_published", "question_set_published", "circle_share_published", "threesixty_freeform_published", "freeform_published", "upload_published")
VALUES (
	'Catalyst Initiative of The Minneapolis Foundation - Building Initiative: Preventing Diseases of Despair', 
	'9-18-2018', 
	'Minneapolis', 
	2, 
	'MTI',
	'121 community members and representatives of organizations and programs with a vested interest in preventing diseases of despair engaged in a conversation and collaborative planning session on primary prevention and holistic and integrative strategies for preventing diseases of despair including suicide, alcoholism and other chemical dependency disorders.', 
	false,
	true,
	true,
	false,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true
);

INSERT INTO threesixty ("name", "date", "location", "category_id", "client", "description", "published_status", "analysis_recommendation_public", "threesixty_reports_public", "dashboard_public", "goals_public", "demographics_public", "oral_report_public", "question_set_public", "circle_share_public", "threesixty_freeform_public", "freeform_public", "upload_public", "analysis_recommendation_published", "threesixty_reports_published", "dashboard_published", "goals_published", "demographics_published", "oral_report_published", "question_set_published", "circle_share_published", "threesixty_freeform_published", "freeform_published", "upload_published")
VALUES (
	'Carver County Public Health - A Healthy Welcome', 
	'10-4-2018', 
	'Chaska', 
	1, 
	'MTI',
	'86 community members gathered to discuss healthcare and community health needs.',
	true,
	true,
	true,
	false,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true
);

INSERT INTO threesixty ("name", "date", "location", "category_id", "client", "description", "published_status", "analysis_recommendation_public", "threesixty_reports_public", "dashboard_public", "goals_public", "demographics_public", "oral_report_public", "question_set_public", "circle_share_public", "threesixty_freeform_public", "freeform_public", "upload_public", "analysis_recommendation_published", "threesixty_reports_published", "dashboard_published", "goals_published", "demographics_published", "oral_report_published", "question_set_published", "circle_share_published", "threesixty_freeform_published", "freeform_published", "upload_published")
VALUES (
	'Health Matters!', 
	'10-24-2017', 
	'Shakopee', 
	3, 
	'Scott County Health Care System Collaborative',
	'140 community members gathered together to discuss healthcare.',
	true,
	true,
	true,
	false,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true,
	true
);

INSERT INTO analysis_recommendation (threesixty_id, findings, recommendations)
VALUES (
	1, 
	'In support of our community engagement efforts in connection with the Health Matters IZI, Marnitas 
Table brought in Latinx outreach specialist, Blanca Martinez Gavina to connect with hard-to-reach 
immigrant stakeholders. Her one-on-one outreach efforts included Scott County Public Schools, local 
churches, apartment complexes, Latinx restaurants and other businesses where she had direct contact 
with approximately 250 Latinx individuals. She reported two prominent themes while in conversation 
with local community, as detailed below.
Fear of being out in the community: Gavina found in her outreach that an estimated 40%-50% 
of the people she spoke with expressed that they felt afraid when they were out in the community. Both 
undocumented and documented Latinxs said that they preferred to stay home and not go outside. 
When asked why, many stated that they experienced police profiling and that they felt that members of 
the "mainstream" community did not want them there. Many felt there was a link between local police 
and immigration enforcement.
One woman reported that she had an experience where ICE (Immigration Customs Enforcement) had 
held her outside of her apartment. She had begged them not to enter the apartment without her as her 
six-year-old was inside alone and would be terrified by their presence.
The agent disregarded her plea and almost knocked down the apartment door to find the daughter 
hiding in the bathroom. Both were taken into custody, but were released within a week. The mother 
explained that to this day (4 years later) her daughter suffers from PTSD and something as simple as 
someone knocking on the door sends her daughter into a traumatic state. She reported that neither 
have received any mental health support. Nor has she been given an explanation for their detainment. 
She stated that they barely go out and stay at home most of the time due to fear since that experience.
Another individual stated that police monitor and racially profile Latinx (and other communities of 
color) on Marshall Street near the highly Latinx populated apartment complexes. They stated that even 
teenagers and children are often stopped and harassed without cause and that many community 
members avoid going outside as they often see two or three police patrols around their neighborhood.
Our outreach also found that this fear even impacts the healthcare access of U.S. citizens — including 
children and other relatives of undocumented people. Despite having access to insurance, parents are 
afraid to sign up and have their names and addresses on record.
Lack of insurance and access to health services: An estimated 40-60% of the Latinx 
individuals she spoke with mentioned that they did not have health insurance or alternately, that 
someone in their family did not have access to any type of healthcare. She found that the majority of the 
people she had contact with stated that they had never been approached about or seen any information 
regarding healthcare services offered in Scott County.
Examples:
A 59-year-old woman reported she did not have health insurance for over a year. She had to buy her 
medication at full price out-of-pocket and sometimes skips taking it due to the expense. She reported 
that she was directed to go to St. Paul when she inquired at a local service agency (unnamed). Due to a 
lack of transportation she has not been able to go and obtain insurance.
A 70-year-old woman reported that she has not had health insurance for the past five years. She was 
diagnosed with diabetes yet she does not get medical treatment to manage it because of the expense. 
This individual stated that she takes home remedies to "feel better."
A 45-year-old woman reported that she had to travel out of state to get a life-saving surgery that kept 
her away from her family for a month. Despite having some health insurance, she reported that she 
could not afford the expense to have the surgery in Minnesota.
A 60-year-old man stopped going to his follow-up appointments because he was told by a medical 
professional that local hospitals were sharing patient information with ICE.
Blanca estimates that more than half of the people she contacted stated that their one-on-one interview 
with her was the first time anyone had approached them about healthcare access. Many individuals 
shared that the community is only receiving care when there are emergency situations, and that they are 
not able to access preventative services.
We do not intend the sharing of these findings as an indictment of the outreach work of Public Health 
or the other agencies involved in the Health Care Collaborative. We merely want to bring to light that 
there are pockets of vulnerable people in the community who are not aware of the resources that might 
be available to them or who are at present unable or unwilling to access those resources due to the 
current climate of fear caused by anti-Latinx rhetoric and policies. We hope that the good relationships 
catalyzed during the IZI will create pathways into these pockets and begin to build trust in the local 
healthcare systems.', 
	'We feel strongly that this initial event has created a great opportunity to strengthen relationships 
between underserved community members and healthcare organizations in the county. In order to reap 
the full benefits of Intentional Social Interaction, it is important to trust the process. Every detail is 
intentional (hence the name!) and so when we provide critical feedback on central issues, it is because 
we do not want deviations from the model to detract from our overall project and collaborator goals. 
Our model has been refined and proven through the experience of bringing over 40,000 individuals 
together across difference for over 10 years, and while we always aim to exceed the goals of our clients 
and collaborative partners, that can only happen when we stay true to all twenty touchpoints of the 
model.
With this in mind, we have outlined below some of our findings and recommendations to improve 
future collaboration and fidelity to the model:
   • Resist focusing too heavily on the RSVP lists. In IZI, we collect RSVPs only, I) to get a sense of 
     the numbers of people who will be in attendance for ordering food, and 2) to get a sense of 
     which communities we might need to put extra attention into intentionally inviting to ensure a 
     good mix of people in the room.
   • Do not release information about other events on the day of the event. During the afternoon of 
     the event, our outreach specialist Blanca was inundated with frantic calls from members of the 
     community who were concerned they could not attend because they were told they had to 
     "register." We later found out that there was information released about an additional event 
     being held by Public Health and that was what caused the confusion. Due to the number of 
     people who initially reported they were attending from the Latinx community being much higher 
     than the number that actually attended, we believe this may have negatively impacted 
     attendance.

The power of IZI is in moving from the transactional to the transformational. When one attempts to 
insert more transactional approaches into the process, the momentum is lost. Circle Share-in is 
designed to allow people leaving the event to feel inspired and changed, and represents the final ritual 
moment of the night. People feel it in their bodies. In order to maximize the impact of Circle Share-in 
we recommend that hosts:

   • Avoid ending with announcements of future events. If there is a desire to recruit for future 
     events, have each collaborative and/or staff member agree to invite at least three people one- 
     on-one and intentionally bring them into the conversation. You could also create a Sticky Stat 
     on the upcoming events and have the question answered in the Lightning Rounds activity to 
     bring it to everyones attention in the room.
   • We also do not recommend promising another "event like this" as people will expect something 
     exactly like IZI. If you do not have the training to execute all twenty touchpoints, or the 
     support of our team, it is unlikely to have the same feel and impact as an IZI. Participants will 
     also anticipate that there will be ample food, a place for children and cross-cultural 
     communication supports, and if these expectations are not met, this may negatively impact your 
     capacity to bring people into conversation in the future!

Based on the community feedback shared during the outreach and engagement processes, it is clear that 
deepening trust and increasing community engagement is an important sector for the ongoing efforts of 
the collaborative. Deepening connection came up in response to several of the questions in Mindstorm 
and across many of the conversation groups, both the need for healthcare providers and organizations 
to deepen their relationships with their clients and underserved communities as well as the need for the 
community as a whole to have spaces and opportunities to connect with one another for their health 
and wellbeing. This desire to connect was indicated both within cultural and other affinity groups but 
also across difference and among community broadly.

We recommend:
  • Continuing to create opportunities to meet with the community on their terms. This means 
    outside of the regular workday hours, on evenings and weekends, in community locations with 
    ample food and spaces for children and families to fully participate.
  • Interpretation is important in cross-cultural conversations but immigrant communities would 
    also like to talk about their health and wellbeing in their first languages, so culturally-specific 
    conversations were also requested so that cultural communities can focus on their unique 
    needs and situations as well.
  • Inviting works best when it is initiated peer-to-peer. Electronic communication only reaches a 
    select few and written materials are helpful, but only when used in collaboration with direct 
    contact and encouragement.

We have truly valued the experience of partnering on this event with the Scott County Health Care 
Collaborative and would be happy to deepen the work in the future to further the impact. It was 
wonderful to witness the deepening of relationships and bridging social capital that occurred in the 
room and to see how well-received the experience of authentic welcome was for so many diverse 
members of the county. It is our hope that this event met the needs and goals of the Collaborative as a
whole and of each individual member who went through the process with us. We believe that any of the 
procedural adjustments covered in this report might easily be smoothed out in the future, as you have 
now experienced the process with first-hand knowledge and understanding of the tools and 
methodology we use to engage community for meaningful, sustainable impact.'
	)
;

INSERT INTO dashboard (threesixty_id, row_title, row_info, row_public)
VALUES 
	(
	1, 
	'Date(s)', 
	'Tuesday, October 24th, 2017', 
	true
	),
	(
	1,
	'Timeline',
	'(the most important thing you can do is "invite, invite, invite")',
	true
	),
	(
	1,
	'Six Weeks - 1 Month Out',
	'Create Dashboard, identify date, host, overall theme, create dashboard invitees, create invitation, set concrete goals',
	true
	),
	(
	1,
	'3 Weeks Out',
	'Identify tools, design event flowverview, recruit volunteers & teen workers, invite more people, check to see who has not rsvpd to ensure you have your demographic mix',
	true
	),
	(
	1,
	'2 Weeks - 1 Week Out',
	'Confirm menus with caterers, buy table supplies (if needed), create question cards, create pull out of the event to remember your marks for delivery of the event, print sign-in sheets, place on clipboards, make sure your supplies are ready for delivery of the event',
	true
	),
	(
	1,
	'Day of Event',
	'Deliver event, pick up sign-in sheets, Mindstorm forms, keep track of measurable indicators of success',
	true
	),
	(
	1,
	'1-2 Weeks After',
	'Download data from sign in sheets and create reportage on outcomes',
	true
	),
	(
	1,
	'1 Month After',
	'Evaluate effectiveness and debrief, turnover of all reportage',
	true
	),
	(
	1,
	'Times(s)',
	'6-9 pm',
	true
	),
	(
	1,
	'Location(s)',
	'Shakopee',
	true
	),
	(
	1,
	'Number Attending',
	'100+',
	true
	),
	(
	1,
	'Fun Title or Theme',
	'Health Matters!',
	true
	),
	(
	1,
	'Demographic of Attendees',
	'Vibrant cross-section of stakeholders including key staff of the collaborative:
	➢	At least 51% people of color and/or immigrant community members
	➢	25%-33% under 24 
	➢	Focusing on key growing and underserved Latinx and Somali populations 
	➢	Also intentionally inviting rural seniors; Nepalese, Hmong, Vietnamese, Sikh; Russian 7th Day Adventists; and POC employees in the hospitals',
	true
	),
	(
	1,
	'Goals of Interactions',
	'
	➢	Harness the power and uncover the voices of Scott Countys rapidly growing and diversifying community. *
	➢	Catalyze, connect and get individuals and organizations out of their bubbles to move towards actionable solutions to improve health outcomes. *
	➢	Bridge relationship gaps across difference to increase equality and decrease disparities.*
	➢	Measurably expand and include hard-to-reach stakeholders in civic engagement and decision-making."
	➢	Facilitate comfortable translation and foster community connections by partnering with young	in
the community to provide translation services
	➢	Determine whether there are actions or behaviors SCPH can engage in to create more authentic welcome for	and their families
	➢	Share negative and positive stories of healthcare experiences
	➢	Identify family needs and/or healthcare priorities
	',
	true
	),
	(
	1,
	'Measurable Indicators of Success',
	'
	➢	Additional partners who want to carry forward with project for at least one year
	➢	40% planned to tell someone about their experience
	➢	50% say that they would like to invite someone to another conversation
	➢	80% of participants say that they met someone across self-identity with whom they planned to stay in touch or collaborate
	➢	% would come to another event',
	true),
	(
	1,
	'Invite Example Language',
	'Please join the Scott County Health Care System Collaborative on Tuesday, October 24th from 6-9pm for Health Matters! a community feast and conversation about health for all of our neighbors in Scott County. During our time together we will explore what we need to be well and fully access healthcare when we need it.
	
Yes! This event is free.
Yes! Dinner is provided.
Yes! Children and youth are welcome. Yes! We will help you find transportation. No uniforms! Dress comfortably!

Community Location Shakopee Community Center

RSVP via e-mail to sammiemarnitastable.org or call us at 612.928.7744
Day-of Contact: 612-875-3215

What to Expect:
Dinner is served in abundance to allay any dietary concern from vegan to carnivore using the Marnitas Table model of Intentional Social Interaction. Dress comfortably (no uniforms!). You are our guest for the day.

If you are receiving this invitation you have been identified as someone who will add and receive extraordinary value through your participation in this conversation. We are specifically seeking a vibrant cross-cultural mixing of individuals for this engaged and supportive conversation. If you know someone who will add and receive extraordinary value through their participation feel free to reach out to someone across race, class, culture or age and invite them to join you!

Many community allies and partners are inviting community members to this conversation. As a result, you may receive more than one invitation. We will try to accommodate as many participants as possible, so please let us know if you plan to be with us by sending an RSVP via e-mail to sammiemarnitastable.org.

About Marnitas Table:
Marnitas Table seeks to measurably increase social capital across race, class, culture, gender and other means of self-identity in order to catalyze transformational change where racial and cultural differences are not viewed as deficits or merely tolerated, but instead viewed as assets. Experts at social capital building, in the past ten years we have welcomed over 30,000 people from around the world and the around the way to find common ground while breaking bread.

Thank you for your consideration.

If you would like to learn more about Marnitas Table, go to marnitastable.org.
	',
	true
	),
	(
	1,
	'Flowverview',
	'
3:00 p.m.	The Table arrives at Site
5:30 p.m.	Hospitality Guide Training/Planner/Team arrive
6:00 p.m.	Feast Begins
6:30 p.m.	Welcome
			Give Flowverview of objectives/conversation/feast 
6:45 p.m.	MindStorm Exercise / Report Back
			[Will need one scribe per table to note down ideas]
7:45 p.m.	Oral Report from MindStorm
8:15 p.m.	Catalyzing Circle Share-in
8:50 p.m.	Closing/Thank You',
	true
	),
	(
	1,
	'Proposed Questions',
	'
	➢	What does health mean to you?
	➢	What would it take to have a health community?
	➢	What does it mean to collaborate for a healthier community?
	➢	What does health equity mean to you?
	➢	What are the gaps to Wellness for your community?
	➢	How does historical trauma impact your ability to access healthcare and wellness opportunities?
	➢	How can we increase the capacity of your community to develop community-based solutions?
	➢	How can we strengthen clinic-community linkages in order to develop options that work?
	',
	true
	),
	(
	1,
	'Opening Questions/Around-the-Room Questions',
	'
	➢	What is the best advice you have ever received?
	➢	What is one thing about you that you would not be able to tell by looking at you? How did you come to be in this room?
	➢	What/who/when has had the greatest impact on your life?
	➢	If you had to pick 2 things about yourself that you value the most, what would they be?
	',
	true
	),
	(
	1,
	'Healthcare-Specific Questions',
	'
	➢	Have you ever been really sick? What did you do?
	➢	What is the first thing you do if/when you get sick?
	➢	What is the first thing you do if/when someone you love gets sick?
	➢	After a woman has a baby, how is she treated traditionally in your culture?
	➢	When we talk about "depression," what are we talking about?
	➢	What does it mean to be "beautiful"?
	➢	What does it mean to be "healthy"?
	➢	What would or has encouraged you to get cancer and other health screenings?
	➢	Do you have any healing rituals? If so, what are they?
	➢	Do you think it is important to have a medical professional understand your own ethnic/cultural norms? Why or why not? Have you ever been treated by a medical professional of a different ethnic/cultural group from your own?
	➢	Have you ever needed to access healthcare outside the U.S.? What was that experience like?
	➢	What type of home/housing do you need to feel healthy?
	➢	Can you find the type of housing in our community that will help maintain/improve your health?
	➢	Do you have experience with the health system in the U.S.?
	➢	Have you ever been to a traditional healer or integrative health practitioner?
	➢	Do you practice any mind spirit body healing methods of your own culture of origin? If so, what is the practice? What is your culture of origin?
	➢	Do you practice any mind spirit body healing methods from any other culture of origin? If so, what is the practice? What is its culture of origin?
	➢	What language did your grandparents/parents speak?
	➢	Should faith have any role in healthcare delivery?
	➢	Should faith have any role in setting healthcare policy?
	➢	Have you ever been made to feel uncomfortable in a healthcare setting?
	➢	Has your health had any impact on your own economic opportunity?
	➢	Has a family members health had any impact on your own economic opportunity?
	➢	What does your belief system say is your obligation to help those who are ill?
	➢	If you attend a faith service, does anyone discuss health and the role of your faith in ensuring the health of the community it serves? Do you ever worry about how getting sick might impact your family or ability to live?
	➢	Has your ability to pay for health care services caused you to not get medical attention?
	➢	Have you ever had a positive experience while seeking healthcare? If so, what made it positive?
	➢	Have you ever had a negative experience while seeking healthcare? If so, what made it negative?
	➢	Have you ever considered a career opportunity in health care?
	➢	What is your definition of health care or health?
	➢	Have you or anyone you know had a negative experienced with health care because of their ethnic, cultural or religious origin?
	➢	Should schools and colleges provide health care? Is health care a basic human right?
	➢	Has access to health care or health been a contributing factor in your housing choice?
	➢	Should people with mental illness be provided free health care?
	➢	Should all immigrants have access to healthcare?
	➢	Should an immigrant tradition be honored when served by healthcare provider?
	➢	Do you currently have any health and wellness needs?
	',
	true
	),
	(
	1,
	'Sticky Stats/Community Snapshots',
	'
Fact-based informative tidbits, opportunities for volunteering, etc.
TBD
	',
	false
	),
	(
	1,
	'Scavenger Hunt',
	'Uncover shared assets in the community.',
	false
	),
	(
	1,
	'Human Survey',
	'Interactive physical survey utilizing participants bodies and the event space to illustrate the voices and experiences of attendees.',
	false
	),
	(
	1,
	'Lightning Rounds',
	'Game show to allow the room to answer key questions that you want the entire room to know. Often part two of a scavenger hunt.',
	false
	),
	(
	1,
	'Resource Wall',
	'Uncover valued resources in the community that comes from the community in the room. Compile and share after.',
	false
	),
	(
	1,
	'Menu',
	'
Feast appropriate from vegan to carnivore including dairy, wheat and soy intolerant.
"Bars" of all types where people can have selection and build a meal on their plate are the most reliable way to achieve the feast.',
	false
	),
	(
	1,
	'Tools',
	'MindStorm',
	false
	)
;

INSERT INTO goals (threesixty_id, description, desired, delivered, difference, percent, comments, row_public)
VALUES (
	1, 
	'Total Number', 
	125, 
	140, 
	15, 
	112, 
	'Based on in-room count, taken 3 to 6 times per account by at least two different people.',
	true
	),
	(
	1,
	'Number of People of Color/Indigenous',
	71,
	70,
	-1,
	99,
	'We generally set this goal at 51% in communities with at least 15% POC/Immigrant/Indigenous. Based on an in-room count.',
	true
	),
	(
	1,
	'Number of People Under 24',
	35,
	33,
	-2,
	94,
	'We generally set this goal at 25-33% unless the project/event does not warrant. Based on both in-room and sign-in sheet counts.',
	true
	),
	(
	1,
	'Measurable Indicators of Success 1: 80% of participants met 1 new person across race, class, culture or other means of self-identity',
	112,
	126,
	14,
	113,
	'80% of the room is our target goal for this MIS.',
	true
	),
	(
	1,
	'Measurable Indicators of Success 2: 80% of participants met 2 new people across race, class, culture or other means of self-identity',
	112,
	112,
	0,
	100,
	'80% of the room is our target goal for this MIS.',
	true
	),
	(
	1,
	'Measurable Indicators of Success 3: 80% of participants say that they met someone across self-identity with whom they planned to stay in touch or collaborate',
	112,
	126,
	14,
	113,
	'80% of the room is our target goal for this MIS.',
	false
	),
	(
	1,
	'Measurable Indicators of Success 4: 40% of participants plan to tell someone about their experience',
	37,
	67,
	30,
	181,
	'40% is our target goal. This is taken only from sign-in sheets.',
	true
	),
	(
	1,
	'Measurable Indicators of Success 5: first time at the table',
	75,
	83,
	8,
	111,
	'80% is our target goal for this MIS.',
	true
	),
	(
	1,
	'Interested in future conversations about preventing child abuse and neglect',
	null,
	41,
	null,
	null,
	'44% of the respondents expressed interest in a future conversation centered on neglect and child abuse.',
	false
	),
	(
	1,
	'Interested in future conversations about housing',
	null,
	35,
	null,
	null,
	'37% of the respondents expressed interest in future conversations centered on housing.',
	false
	),
	(
	1,
	'Interested in future conversations about transportation',
	null,
	35,
	null,
	null,
	'37% of the respondents expressed interest in future conversations centered on transportation.',
	false
	),
	(
	1,
	'Interested in future conversations about education',
	null,
	57,
	null,
	null,
	'61% of the respondents expressed interest in future conversations centered on education.',
	false
	),
	(
	1,
	'Measurable Indicators of Success 6: total number of sign-in sheets',
	28,
	94,
	66,
	336,
	'Typical sign-in rate is 10%. We doubled our goal to 20% to identify how resonant and sticky the event was.',
	false
	)
;

INSERT INTO threesixty_reports (threesixty_id, demographic, summary, methodology)
VALUES (
	'1', 
	'TOTAL PARTICIPANTS: approx. 121 INDIGENOUS/PEOPLE OF COLOR: approx. 58 (48%) Participants included community members and organizational representatives from a variety of fields, including community corrections, healthcare, foundations and nonprofits, academic research human services, politics and public policy, journalism, business, library services and the arts.', 
	
	'On Tuesday, September 18th 2018, approximately 121 community members and representatives of organizations and programs with a vested interest in preventing diseases of despair were brought together at the Lake Calhoun Event Center (St. Mary’s Greek Orthodox Church) in Minneapolis for a feast and engaged conversation and collaborative planning session on primary prevention and holistic and integrative strategies for preventing diseases of despair including suicide, alcoholism and other chemical dependency disorders. The all-day unConference was divided into morning sessions, focusing on “Naming the Issue,” an afternoon luncheon Mindstorm (focused discussion) section designed to support participants in “Making the Connections” necessary to produce systemic and intra-systemic change, and afternoon strategic planning activities geared toward “Catalyzing Action.”

The event featured pop-up testimonial presentations providing a wide range of lenses highlighting community impacts of despair and its associated diseases, including perspectives from Assistant Commissioner of the Minnesota Department of Health, Jeanne Ayers, Paul Riedner of the Veteran Resilience Project, Dr. Helen Kim of the Hennepin County Medical Center, Senior Vice President of Community Impact for the Minnesota Foundation, Chanda Smith Baker, and Donna LaChapelle of the Indian Women’s Resource Center and the Center for Mind-Body Medicine. Participants who wished to weigh in with their own brief observations and relevant stories and data were invited and encouraged to participate in open-mic style pop up sharing opportunities interwoven throughout the day. Facilitator Marnita Schroedl led several “mindful moment break-ins” including a minute of gratitude and a physical activity for releasing tension, in addition to guiding participants through the afternoon’s collaborative planning session.

Breakfast, desserts and a luncheon feast appropriate for all dietary needs from vegan to carnivore were prepared by Fabulous Catering. In addition, a Quiet Room staffed by local practitioners Ayo Clemons, Rowan Fakhoury, and Awana Moye was also made available to all guests.', 

	'This luncheon Mindstorm was undertaken on Tuesday, September 18th by guests of the 2018 unConference Building Resilience: Preventing Diseases of Despair. For this set of small group discussions, we asked participants to focus their conversations on the questions from the Mindstorm discussion guide (see facsimile on page 3) that their luncheon discussion group thought most important to address. Nine groups of participants submitted notes from the Mindstorm discussions. Identical instructions were given to each group on how to conduct their discussions and submit notes after the session. 

Although participants were given the option to rank the discussion topic questions in descending order of their estimation of each topic’s importance, only two groups elected to rank questions, one of which submitted incomplete ranking information. This limits the interpretability and utility of a rankings analysis in this report, however, we have included the submitted ranking votes in the instructions sheet facsimile for your information (see page 3).

The following is an overview and analysis of the emergent themes resulting from these conversations, as recorded by participant scribes on the notes sheet included with the questions. The handwritten responses have been transcribed, aggregated and de-identified in a document following this analysis. 

Central themes emerging from the discussion notes include the importance of being able to meet basic needs, the centrality of social connections as a preventative measure and safety net for those suffering in silence, and a variety of proposed approaches to combatting the issue from the perspectives of the individual, the family, the community, public policy and public and private systems or agencies.' 
);

INSERT INTO oral_report (threesixty_reports_id, group_num, response)
VALUES 
	(
	'1', 
	'1', 
	'We only got to question number one and decided not to rank them. The last five minutes we didn’t know if we would have the answer, but what we came up with is looking at the root – how do we get to the root? You can’t prevent something if you don’t know what it is. We looked up what primary prevention is, and building awareness, naming it, coming up with a plan and then prescribing – which follows the four noble truths of Buddhism. Instead of getting overwhelmed, we focused on the framework.'
	),
	(
	'1', 
	'2', 
	'We didn’t rank them either. So, we were talking about keeping kids safe and supporting parents. We talked a bit about pre-soul connection, to be heard, to be heartstrong – that’s what it looks like for me. Creating those resources for families, insurance versus non-insurance, who is sheltered? Housing and healthcare are very important, and it’s important not to be intrusive when people are telling their stories. I am what you call Am. Indian, but I call myself Anishinaabe and Lakota. It’s important to listen to stories and realize that everyone is in some kind of pain. We talked about that cultural connection. I also talked to Paul and thanked him for his service. My niece was also in Iraq, so I know how important it is to listen to those stories. Choose kindness versus being strong. I heard someone say humility. You have to be fully human. I think that’s what we forget sometimes when we’re developing programs – it’s stopping long enough to really hear those stories.'
	),
	(
	'1', 
	'3', 
	'Our table talked about what it means to be resilient as individuals. We were fortunate to have Umo at our table to drop some knowledge. She said resilience is the flipside to trauma; she talked about the earthworm and how it consumes what it is its path, transforms it and then eliminate it.'
	),
	(
	'1', 
	'4', 
	'So, we talked about all the many different things – I really liked how diverse our group is in backgrounds and beliefs and what we do for a living. I’ve been working in health and wellness and suicide prevention for a decade, we’ve been trying to cure heart disease and thinking about mental health and wellness and suicide prevention. How do people get to this place of despair? We think prevention is about creating community and preventing social isolation. Every teen I’ve talked to about suicide has talked about isolation, saying I just wish someone were there, I wish someone cared, with no shame or blame. As a community, I think we lack that – safe places where people can say I’m struggling with alcohol and I need help. It’s about creating community and a sense of belonging. We live in the Wright County, in a town called Casado – and in the last year, in this small town, it [suicide] has occurred eight times. These weren’t people with a history of mental health issues, nobody in our community knew – one of these people was a member of my family. My mission today is to say, you know, if you need someone to talk to who won’t look at you like a weirdo, just listen – creating that environment.'
	),
	(
	'1', 
	'5', 
	'We practiced a little bit of self-care, took time to eat and breath and just connect. We also discussed the issues on a broader scale – there’s so many different things going on when you’re talking about diseases of despair. We get caught up in systems and perpetuate behaviors and policies without taking the time to step back and see what’s working, which leads to families and individuals suffering from the same things over and over because systems haven’t taken a step back to look at what people actually need. Housing is another one – we’re having an affordable housing crisis in Minneapolis. I’m sure many of you know about the encampment here in Minneapolis. The systems are going in and talking to those folks to find out what they need, so that’s something we can do to better meet the needs of individuals and clients we serve.'
	),
	(
	'1', 
	'6', 
	'We focused on question two about resources and broadened out to talk about including access to social support to be considered a resource like housing and food. Having an understanding of the cortisol effects of stress. We also talked about widening our perspectives as to why disparities in access to resources exist – what’s creating the unevenness in the first place? Instead of just making sure everyone has food, let’s ask why they don’t have food in the first place. We talked too about social constructs like gender assignment and the role that plays in inequitable access to resources.'
	),
	(
	'1', 
	'7', 
	'I learned by writing as I listened, which means I ended up with notes that only I can read. We started with the question on resilience and acknowledged that this term is challenging for people of color and from other marginalized communities, because you have to be resilient just to survive. We talked about increasing capacity to learn how to find ways to survive and thrive through means of healing that are more appropriate. A power shift is essential; US culture needs healing from trauma. Everyone has work to do in our own communities and across communities as well. Camille made a distinction between changing behavior and changing hearts and minds. Changing behaviors is the way to go, but you have to want to change. Willingness to be vulnerable and uncomfortable. Recognizing physical signs when something triggers trauma for you and having a way to say, I’ll continue this conversation when I’ve had time to heal myself.'
	),
	(
	'1', 
	'8', 
	'We addressed issues around self-care and resilience. We didn’t get to strategy, but we shared with each other. As professionals we are asked to become our highest selves and the various things that come up with that from physical to mental health. The idea that some of us expressed significant chronic and mental health issues, so self-care comes in. I find that in times of stress or trauma my self-care gets better. I had the privilege of safety and support and love from such an early age that those self-care practices were already engrained, so it makes you grateful, since not everyone has access to that care, to housing and food security. A lot of us shared that because of our empathy, it also creates a challenge, like how do I most effectively use my skillset to be a practitioner who contributes something of value.'
	),
	(
	'1', 
	'9', 
	'We have some good resources here at our table – some of what we do for a living informed our discussion. S. talked about the work he’s doing at Hennepin Health Center (trauma informed health practice), particular needs of ER staff. There’s a stereotype that the adrenaline runs high and they don’t necessarily take care of themselves, so can be full of trauma. Doctors don’t make the best patients or necessarily engage in self-care even though there is a lot of exposure to trauma.  Someone mentioned that historical trauma exists in the bodies and minds of the oppressed, but also within the oppressor. Tanya from Owatonna said that her community really wants to do a project to build resilience in their community. She said one of the biggest barriers is a lack of connection. Sil is a playwright, so he said, how about a community play using theater to connect the community?'
	),
	(
	'1', 
	'10', 
	'We mostly ate and got to know each other, so we just took the first question about primary prevention. We related it to primary care for mental health. I think about a universal approach that would provide a wider net rather than boxing people into a particular illness. Thinking about Diseases of despair, I think about social and cultural isolation and the need for belonging. Similarly, we talked about primary prevention getting to the root (we shared personal experiences).'
	),
	(
	'1', 
	'11', 
	'My name is April, I’m an addict…oops, wrong meeting! Just kidding! Listening to all of you, I’ve been thinking about what to share. I really appreciate everything you’ve said – I really like that earthworm [analogy] because we gotta take in a lot of garbage and let go of the waste to create room for new growth. When we saw the power point and the statistics being discussed and how its symptomatic of the increase in these illnesses in our community it’s humbling, really striking. Everyone at this table works in helping professions, five of us are in corrections in Faribault working on mental health and suicide prevention and it really is just the tip of the ice burg. It starts with us realizing what our own traumas and experiences have been and do some self-care, so we heal instead of passing sickness on. Heather had a nice example about a petri dish. What if you have a petri dish that’s full of toxicity? How do you be healthy in an unhealthy environment? It’s not easy to answer, and we didn’t come up with the solution, but creating that question was a good starting point for us.'
	),
	(
	'1', 
	'12', 
	'We spoke about primary prevention and how prevention has to happen in a more holistic environment. We liked the analogy from earlier about symptoms/illnesses being leaves on a tree and how you can’t handle things in isolation. That social connection that people need to feel cared about and healthy – it’s important to make sure we’re not neglecting our own families and those in our social circles to support them. This work happens in community. Systems need to reflect what communities need.'
	),
	(
	'1', 
	'13', 
	'We talked about the image of the tree, about some things that are roots of despair, some things that are like the trunk, and we talked about what are like the branches or ways to reach out? It’s so important to be in when you’re talking with a person to be respectful, have a human-to-human connection and just listen. It’s shared humanity that allows us to navigate this together, conveying through your presence and the natural way that you love that you care. That you’re seeking understanding, seeking to get underneath the surface (but also respecting when people don’t want to go there). When there’s an opening, speak truth to people – perhaps about the gifts they bring to life.'
	),
	(
	'1', 
	'14', 
	'We’ve said a lot of things that you have already mentioned, but we focused on resilience and collaboration. We connected over what resilience means to us, but also how many of us in here gravitate toward positions where we want to help people with THEIR trauma without identifying what our own traumas are and attempting to collaborate on that. That issue where we feel like we’re in one place, because we work in systems and provide services, but we are dealing with so much trauma that spills out in so many ways. So, one thing we can do is to start unpacking and addressing our own trauma, so that we can clear those things out of the way to focus on the work we want to do and the way we want to collaborate.'
	),
	(
	'1', 
	'15', 
	'We were talking about workplace wellness – what kind of message would it send in the workplace of people who do this kind of work to have a dedicated mental health professional so that you don’t have to deal with primary and secondary trauma without the support necessary to process that.'
	),
	(
	'1', 
	'16', 
	'We talked about rehabilitation as an industry here. It’s a huge industry for profit in MN. The programs that are setup are not really for long-term help (because there are so many jobs depending upon their failure) – it’s not for care or long-term sustainability. As a system, that is corrupt and heartbreaking to understand. What can we do as a community to provide long term supports and to help people seeking to grasp their sobriety?'
	),
	(
	'1', 
	'17', 
	'In my profession, prevention is so important and we’re all frustrated about how healthcare right now is really sick-care. There are healthcare providers though who believe in promoting lifestyle medicine. There’s someone here who was diagnosed with cancer and who felt insecure about being treated here, so she went back to her home town in Kenya for treatment and to be around family and community, homecooked meals – then she was able to fight it when we came home. So, food, culture, connection. We talked about how we have different ethnicities, local food, spices – like lemongrass in SE Asian cuisine. It can be both food and tea – education is important to empower every individual to get well and to improve health disparities regardless of wealth. I’ll add about spirituality and the traditional practices of spirituality in community, specifically the Hmong community’s practice of Shamanism. After war and displacement all over the world there has been a break in the traditional practice of shamanism and cultural healing – there’s a generational gap there. So, we talked about what it would take to rebuild those connections to fight addiction, despair, what we’re seeing here today.'
	),
	(
	'1', 
	'18', 
	'Hello and thank you to MTI for this opportunity. For me, prevention is better than a cure. I’m very spiritual, my life is based around karmic theory. That you are where you are at this present moment because of your actions in the past. Which empowers you to be responsible for your actions. That’s why as Hindus we accept suffering in our lives, but also know that by making different choices we can make a difference in the future. So, I bring that aspect to my work with inner city children and in the workshops I teach. So today might be a blank page you have and you can design it according to what future you want – knowing that our present life is determined by our past – what choices we make today will be the past of tomorrow. Start creating a new past that you have power over (unlike the belief system and experiences you had in the first eight years of life or so). Self-awareness, yoga and meditation is part of our lifestyle. It’s not something you keep separate. It’s your values, who you are, your family unit. It’s very common to have joint families (in my culture). It’s happening now slowly in this country because of economics – so that’s the other way around. But with self-awareness, once we know where we are coming from, we know that your internal words become the world of the kids coming behind us, the future. The future is a promissory note, but the present is a gift. Knowing that this moment too shall pass, anything in the moment you can handle. Take back the power and you can make your life what you want.'
	)
;

INSERT INTO response_category (description)
VALUES 
	('uncategorized');

INSERT INTO question_set ("threesixty_reports_id", "set_title", "breakdown")
VALUES 
	(
	1,
	'QUESTION 1: Primary Prevention of Diseases of Despair',
	'Five discussion groups submitted a total of 33 comments addressing this question, making this the highest-traction question of this Mindstorm. In the notes, participants explored a range of definitions and approaches to addressing despair and working towards primary prevention, with a special eye toward issues of equity and trauma-informed responses (“recognizing the role of white supremacy and capitalism”), public education and norms development (“educate adults and children at [the] same time,” and “normalize the symptoms and the response to dysfunctional situations”), the implementation of holistic care policies by doctors and systems (such as narrative medicine, recommended by one group urging medical providers to “train doctors to listen for human stories, not just symptoms”), and emphasizing the “human-to-human” connection and extra-clinical preventative measures. Participants also highlighted a need for secondary trauma resources for those who work with issues of despair, trauma and trauma-related care and spoke to the idea that “prevention might not happen in a clinical setting,” again drawing attention to social connections and inter-systemic models of preventative care, ultimately a standout theme in this Mindstorm.'
	),
	(
	1,
	'QUESTION 2: Basic Needs & Social Determinants of Health',
	'Three groups submitted notes on this question, for a total of fourteen responses. Comments in this section focus on the role access to the material requirements for meeting basic needs and the barriers inequities of access create for those who may be suffering and unable to connect with existing resources and programs. Housing and transportation are the main areas of concern in the notes submitted by participants, however, the importance of social connectedness, a theme that spans the whole of the discussion notes across topic areas, also emerges strongly here. Guests opined that “people need to feel welcome where they live…not isolated,” and urged those interested in resilience and primary prevention of suicide, alcoholism and other diseases of despair to “listen to stories ➔ everyone is in pain,” highlighting the hidden-in-plain-sight nature of isolation, alienation, and despair, alongside possibilities for increasing and deepening social connections as a critical strategy for addressing these issues.'
	),
	(
	1,
	'QUESTION 3: Resilience & Collaboration',
	'One group addressed this question, submitting seven comments and questions largely concerned with creating social and interpersonal mechanisms for acknowledging vulnerability, pain and personal struggles while remaining (or becoming incorporated into) a warm, welcoming and supportive community capable of accepting such vulnerabilities without judgment and offering inclusion, comfort, and resources to “help a person survive.” Social connectedness emerges here a central piece of providing and catalyzing supportive networks to help prevent community members from “falling through the cracks” or suffering in silence and isolation.'
	),
	(
	1,
	'QUESTION 4: Resources & Impact',
	'No groups elected to submit notes in response to this question, likely because of a variety of alternative means for engaging the themes contained in this section. For example, guests recorded a variety of relevant community resources and programs to support resilience and primary prevention of diseases of despair on notes sheets located on each table. The full transcribed list of resources is available on page fifteen of this report.'
	),
	(
	1,
	'QUESTION 5: What else should we know?',
	'Three groups responded to this question, submitting thirty total responses between them. Responses in this section vary thematically, due to the freeform quality of this section, but largely fall into three categories: individual techniques for promoting resilience, workplace policies for wellness, and mental health in public policy. Community “belonging,” developing workplaces that support needs for self-care and preventative wellness (such as liberal vacation policies, trust, and workplace cultures supportive of mental health needs), and addressing barriers and systemic challenges to mental health issues figure prominently in the responses, across these categories.'
	)
;

INSERT INTO questions (set_id, question)
VALUES 
	(
	1,
	'How do you define “primary prevention”? What does (or would) primary prevention look like in practice? Who should be involved in these efforts? Does anything come to mind when you think of “diseases of despair”? How might we productively broaden the scope of prevention efforts so that they include appropriate attention to non-opioid drug use disorders, alcohol and liver disease, suicide, depression and other mental illnesses? What might the benefits of broadening this lens be? Is there a role here for consumer education about alternatives like non-narcotic pain management therapies?'
	),
	(
	2,
	'Does the ability to meet basic needs and access crucial resources (like affordable housing, healthcare, and food security) play a role in how chronic pain, depression, addiction, suicide and similar afflictions of despair are experienced? What is the role of social factors like poverty, discrimination, poor education, dirty/dangerous environments, family instability and social exclusion? Are there resources, system or policy changes that could mitigate some of these effects? If so, who should be responsible for providing or overseeing them? What can you as an individual do? Do belonging and community ties play a role in establishing a baseline of secure wellbeing?'
	),
	(
	3,
	'What does it mean to be resilient as individuals? As a community? Is there anything we as a society should be doing to support resilience and healing from addiction, depression and other mental health issues? Is there anything we as individuals and community members can do to better support resilience? Are there organizations or individuals not here today who you believe should be a part of efforts to strengthen resilience and support healing from addiction and despair? Who are they? What do they do?'
	),
	(
	4,
	'Are you currently facing any challenges related to diseases of despair in your work or personal life? Is there anything someone else could do to assist you? Do you know of any resources, programs or opportunities for supporting resilience and primary prevention of suicide and addiction that everyone here should know about? Do you know of any resources for non-narcotic management of physical, mental and/or emotional pain?'
	),
	(
	5,
	'Is there anything we didn’t ask, that we should have? If so, please share both the question(s) you have identified and your group’s response(s).'
	)
;

INSERT INTO response (question_id, response, category_id)
VALUES 
	(
	1,
	'
	➢	Primary prevention includes access
	➢	Provide [sic] and resources before it becomes a problem – proactive 
	➢	Diseases of despair ➔ gloomy 
	➢	Educate adults and children at [the] same time 
	➢	Change social norms around school 

	➢	Noticing symptoms of diabetes and chronic pain to treat the entire body (the leaves analogy)
	➢	Look at the patient holistically
	➢	Normalize the symptoms and the response to dysfunctional situations
	➢	Prevention: surrounding people with people, making sure there is a support system for folks (having there [sic] back)
	➢	Prevention might not happen in a clinical setting (make sure people have peace of mind)
	➢	Make systems reflect what community needs. This work happens in community and we need systems that reflect what community needs. Reach out to social connections and do a check-in. Tell people you love them.

	➢	How to meet despair?
		o	Respect
		o	Human-to-human connection
		o	You care
		o	Speak truth, ID “their gifts” 

	➢	Recognizing role of white privilege and capitalism
	➢	Historical trauma – of the oppressed and oppressors
	➢	Trauma-based or trauma-informed model of care 
	➢	Narrative medicine 
		o	Teaching doctors to listen to human stories rather than just listening for symptoms 
	➢	Mind-Body-Spirit skills for teachers, for restaurant workers, for ER staff  
	➢	Using art as safe space
	➢	Figuring out ways to connect people in their own communities

	➢	Keeping kids safe ➔ supporting parents 
	➢	Suicide
	➢	Disease [unclear handwriting] connection to be heard ➔ heart story
	➢	Bringing resources to family ➔ workers who treat
	➢	Insurance versus non-insurance
	➢	Food/shelter – housing is healthcare 
	➢	Leadership / modeling 
	➢	Find ways to identify people are discounted and provide connectors 
	➢	Important not to be in the [illegible] ➔ give time for storytelling
	', 
	1
	),
	(
	2,
	'
	➢	Affects transportation, access to resources
	➢	Amplifies
	➢	Impacts access to resources
	➢	Inability to seek resources
	➢	Housing First models
	➢	Penny a Pill
	➢	Coding and zoning laws for housing
	➢	Social connectedness is critical!

	➢	Yes!!!
	➢	People need to feel welcomed in the place they live
	➢	Feel connected / not isolated 

	➢	Listen to stories ➔ everyone is in pain
	➢	Choose kindness ➔ versus be [sic] strong
	➢	Kindness, humility
	',
	1
	),
	(
	3,
	'
	➢	Ability to be / stay connected with community
	➢	Q: Are there things to help a person survive?
		o	People / community – sense of belonging / social connectedness
	➢	Ability to BE a part of the communities we work / help
	➢	Sense of being accepting, comforting (comfort level)
	➢	How did / do people get to that state (of suicide?)
		o	Social connectedness
	➢	Acknowledging that people are in pain, trusting and building relationships
	➢	Personal vulnerability – are we willing to be vulnerable?
	',
	1
	),
	(
	4,
	'n/a',
	1
	),
	(
	5,
	'
	➢	MH + Well 
	➢	How do people [sic]

	➢	Positive Thriving 
		o	Talk about what takes to be MH
		o	Define mental health 
		o	MH is more than absence of illness
		o	Community and sense of belonging
	➢	Bring self-care conversations to a policy convo [conversation]
		o	What are the barriers and systemic challenges 
		o	Know but need to hold space for [this]
	➢	Minneapolis [is] facing housing crisis!

	➢	Belonging 
		o	Relationships	
	➢	Build in peer opposition 
		o	Consumers 
		o	 Provides facing vicarious trauma 
	➢	Workplace Policies 
		o	11 floating vacation days
		o	Quiet room
		o	Change culture / understanding MH [mental health] is valuable 
		o	Being able to leave a meeting
			▪	Trusting employees
	',
	1
	)
;

INSERT INTO demographic (threesixty_id, ethnicity, passion, profession, generation, referral, comments, plans_to_tell, first_time, child_abuse, housing, transportation, education)
VALUES 
	(
	1, 
	'Hispanic', 
	'God', 
	'Minister of The Light of the World Church', 
	'', 
	'Amy Lueck', 
	'This community has very nice hopes to make changes. Let us make them happen', 
	true, 
	true, 
	true, 
	true, 
	true,
	true 
	),
	(
	1, 
	'Caucasian', 
	'Life Cycle Housing', 
	'Architectural Designer', 
	'Gen X', 
	'SCALE 50X30', 
	'Love the engagement', 
	true, 
	true, 
	true, 
	true, 
	true,
	true 
	),
	(
	1,
	'Mutt (Caucasian Mutt)', 
	'Autism', 
	'Retired Registered Professional Engineer', 
	'Boomer', 
	'SW Media/Shakopee Newspaper', 
	'Meeting (talking with) people from other cultures.',
	true, 
	true, 
	false, 
	false, 
	false,
	true 
	),
	(
	1,
	'Hispanic',
	'Family',
	'Nurse',
	'Gen X',
	'Catholic Church',
	'Many people came and it was great to gather with so many people of other cultures. Everyone treated me as if they knew me.',
	false,
	false,
	false,
	false,
	false,
	false
	),
	(
	1,
	'Caucasian',
	'Looking, Baking',
	'Pastor',
	'Gen X',
	'Facebook, Luke Hannen',
	'Like the diversity of people',
	false,
	true,
	true,
	true,
	false,
	true
	),
	(
	1,
	'Latino',
	'',
	'Pastor',
	'Gen X',
	'Luke Hennen',
	'I would like to, I believe its interesting.',
	true,
	true,
	true,
	true,
	true,
	true
	),
	(
	1,
	'Hispanic',
	'Exercise',
	'Homemaker',
	'Gen X',
	'St. Joachim and St. Anne Parish',
	'I enjoyed it. I learned a lot about health related things which I did not know existed in my community.',
	false,
	true,
	false,
	false,
	true,
	false
	),
	(
	1,
	'Hispanic',
	'Learning new things everyday.',
	'Homemaker',
	'Gen X',
	'St. Joachim and St. Anne Parish',
	'It is very important that all of the community members are provided for and understand existing health resources.',
	false,
	true,
	true,
	false,
	true,
	true
	),
	(
	1,
	'Caucasian',
	'Helping those in need',
	'Homemaker',
	'Boomer',
	'Mailing',
	'Awareness of the need of those in Jackson Heights. Beautiful woman from Mexico who desires to be healthier in mind and body.',
	true,
	true,
	true,
	true,
	false,
	false
	),
	(
	1,
	'Italian/German/Swedish American',
	'Walking, Reading',
	'Community Benefit and engagement/mission',
	'Gen X',
	'SCHCSC',
	'Humbled by the resilience of the Latina women in my community. Great ideas from community members! We will have to figure out translating for our Somali families at our next table.',
	true,
	false,
	true,
	true,
	true,
	true
	),
	(
	1,
	'Caucasian',
	'Scuba Diving, Hiking, Biking, Public Health',
	'Educator for a Medical Sales Company',
	'Gen X',
	'Scott County Public Health',
	'I think one thing all cultures have in common is that they face barriers to care. It was wonderful to sit at a multicultural table and discuss health issues.',
	true,
	true,
	true,
	true,
	true,
	true
	),
	(
	1,
	'Somali',
	'To be part of our big community',
	'E.A.',
	'Gen X',
	'',
	'It was great conversations with great people. We all have the same concern.',
	true,
	true,
	true,
	true,
	false,
	true
	),
	(
	1,
	'Somali',
	'',
	'',
	'Gen X',
	'',
	'',
	false,
	true,
	false,
	false,
	false,
	true
	),
	(
	1,
	'Caucasian',
	'Helping people, children, community, volunteering',
	'Executive Director - River Valley Nursing Center',
	'Gen X',
	'Health Care Collaborative',
	'Awesome environment, questions, food. Very engaged people. Fun and educational night.',
	true,
	true,
	false,
	false,
	false,
	false
	),
	(
	1,
	'Hispanic',
	'Dancing',
	'Cook',
	'',
	'Church',
	'I liked sharing and learning how to give my opinion to demand change.',
	false,
	true,
	false,
	false,
	true,
	false
	),
	(
	1,
	'Caucasian',
	'Serving across cultures - making people of all cultures and origin feel loved and cared for.',
	'CPA, Accredited Representative (Immigration)',
	'Boomer',
	'',
	'The warmth around the table was amazing. I was able to connect with members of the community and community organizations who need to know about our ministry. Thank you!!',
	false,
	true,
	false,
	false,
	false,
	true
	),
	(
	1,
	'Caucasian',
	'Being with my family, traveling',
	'County Government',
	'Gen X',
	'Work',
	'Very welcoming; made you feel immediately welcome; great conversation; met new people',
	true,
	true,
	false,
	false,
	false,
	true
	),
	(
	1,
	'Hispanic',
	'Learning different cultures',
	'Accountant',
	'Millenial',
	'Work',
	'Learned about different cultures and understood why they would respond in a certain way. Learned the importance of expressing yourself and not judging.',
	true,
	true,
	false,
	true,
	false,
	true
	),
	(
	1,
	'Indonesian Dutch',
	'Music and Dance',
	'Dance Teacher and Barista',
	'Millenial',
	'My Parents',
	'Thank you so much for inviting us. This was absolutely wonderful. What a beautiful community. Cannot wait for the next.',
	true,
	true,
	false,
	false,
	false,
	true
	),
	(
	1,
	'Latino',
	'',
	'Homemaker',
	'Millenial',
	'A portal for the county',
	'',
	false,
	true,
	false,
	false,
	false,
	false
	),
	(
	1,
	'Latino',
	'Taking care of my garden',
	'Homemaker',
	'Boomer',
	'',
	'',
	true,
	true,
	true,
	false,
	false,
	false
	),
	(
	1,
	'Caucasian',
	'Nutrition, Fitness',
	'Nurse Manager',
	'Boomer',
	'Scott County Public Health',
	'Very interesting experience discussing various cultures. I am attending as part of a Community Health project for school.',
	true,
	true,
	false,
	false,
	false,
	false
	),
	(
	1,
	'Caucasian',
	'Food Systems, Health Equity, Social Justice',
	'PH Professional',
	'Millenial',
	'Marnita',
	'Great execution. Great experience.',
	true,
	true,
	true,
	true,
	true,
	true
	),
	(
	1,
	'Carribbean',
	'Children',
	'Teacher',
	'Boomer',
	'Community Center',
	'Most people think the same, although in a different language.',
	true,
	true,
	true,
	false,
	false,
	true
	),
	(
	1,
	'Mexican-American',
	'Dance',
	'Student',
	'Gen Tech',
	'Church',
	'It was really nice meeting new people and talking about health problems and solutions in our community.',
	true,
	true,
	false,
	false,
	false,
	true
	),
	(
	1,
	'Caucasian',
	'',
	'PHN',
	'Boomer',
	'Public Health Director',
	'It was interesting - in a good way. I had no idea what to expect.',
	true,
	true,
	false,
	false,
	false,
	false
	),
	(
	1,
	'Caucasian',
	'Learning',
	'Public Health',
	'Boomer',
	'Colleague',
	'It was fun and energetic',
	true,
	true,
	true,
	true,
	true,
	true
	),
	(
	1,
	'Caucasian',
	'Nutrition',
	'Registered Dietician',
	'Millenial',
	'Jackie and Tamera',
	'Fabulous conversations',
	true,
	true,
	false,
	false,
	false,
	false
	),
	(
	1,
	'Hispanic',
	'To love God above all things',
	'',
	'Gen X',
	'A Friend',
	'My experience in this dialogue was spending time with people from diverse races in our community.',
	false,
	true,
	false,
	false,
	false,
	true
	),
	(
	1,
	'',
	'Cooking',
	'Homemaker',
	'',
	'Church',
	'I would like to share more with my neighbors and friends.',
	true,
	true,
	false,
	false,
	false,
	true
	),
	(
	1,
	'Caucasian',
	'Children, Prevention',
	'Nurse',
	'Gen X',
	'Work/Email',
	'Very interesting!',
	true,
	true,
	true,
	false,
	false,
	true
	),
	(
	1,
	'Somalian',
	'People',
	'Interpreter',
	'Millenial',
	'Ibrahim',
	'',
	true,
	true,
	true,
	true,
	true,
	true
	),
	(
	1,
	'',
	'Kids, Family',
	'Social Science',
	'Gen X',
	'Public Health',
	'Great conversations',
	true,
	true,
	true,
	true,
	true,
	true
	),
	(
	1,
	'Swede',
	'History',
	'Pharmacist',
	'Boomer',
	'Mike Wilcox',
	'',
	false,
	true,
	false,
	false,
	false,
	false
	),
	(
	1,
	'Caucasian',
	'Health for all!',
	'Public Health',
	'Millenial',
	'Richard Scott (My Supervisor)',
	'I am excited to see how this even informs the work of Scott Countys public health work.',
	true,
	true,
	false,
	false,
	false,
	false
	),
	(
	1,
	'Somalian',
	'',
	'',
	'',
	'Mohamed',
	'',
	false,
	true,
	false,
	false,
	false,
	false
	),
	(
	1,
	'',
	'',
	'',
	'',
	'Mohamed',
	'',
	false,
	true,
	false,
	false,
	false,
	false
	),
	(
	1,
	'US Somali',
	'',
	'Eedes 65 Years',
	'Boomer',
	'Mohamed',
	'To get a good ID card which is working in hospitals which has transportation which has good translation.',
	false,
	true,
	true,
	false,
	false,
	true
	),
	(
	1,
	'Hispanic',
	'Swimming',
	'Army Reserves',
	'Millenial',
	'Church',
	'Translating for people in this event helped me appreciate the fact that I am bilingual. I can help people in our community, so they can be heard',
	true,
	true,
	true,
	true,
	true,
	true
	),
	(
	1,
	'Caucasian (German and Norwegian)',
	'',
	'Senior Admin Specialist',
	'Millenial',
	'50x30',
	'Great diversity - ethnicity, cultures, ages, etc. Impressed at turnout!',
	true,
	true,
	false,
	false,
	false,
	true
	),
	(
	1,
	'German American',
	'Art, Reading, History',
	'Restaurant Management',
	'Boomer',
	'Display at Al Franken speech',
	'Very good discussion with diverse people I would not have otherwise met',
	true,
	true,
	true,
	false,
	false,
	false
	),
	(
	1,
	'',
	'Job',
	'',
	'Boomer',
	'Church',
	'It is beautiful to see new faces. I loved this event.',
	false,
	true,
	false,
	false,
	false,
	true
	),
	(
	1,
	'Caucasian',
	'Outdoors, Public Health',
	'Nursing',
	'Millenial',
	'Scott County',
	'What a wonderful conversation. Thank you.',
	true,
	true,
	true,
	true,
	true,
	true
	),
	(
	1,
	'Hispanic',
	'Sports, Outdoor Activities',
	'',
	'Gen Tech',
	'Family',
	'It was really interesting meeting new people',
	false,
	true,
	true,
	false,
	false,
	true
	),
	(
	1,
	'Caucasian',
	'Healthy communities, walking, family/friends',
	'City Planner',
	'Millenial',
	'Scott County Public Health',
	'Fantastic! Great to see so many people attend and hear new voices that may not always be heard.',
	true,
	true,
	false,
	true,
	true,
	true
	),
	(
	1,
	'Irish/Welsh',
	'Cat Health',
	'Vet Med',
	'Boomer',
	'Facebook',
	'',
	true,
	false,
	false,
	false,
	false,
	false
	),
	(
	1,
	'Caucasian',
	'Exercise',
	'Physician',
	'Boomer',
	'Scott County Public Health',
	'Great opportunity to meet new people',
	true,
	true,
	true,
	false,
	false,
	true
	),
	(
	1,
	'Caucasian',
	'Nutrition',
	'Millwork Sales',
	'Gen X',
	'Husband',
	'',
	true,
	true,
	true,
	true,
	true,
	true
	),
	(
	1,
	'Mexican',
	'Helping; health; doctor',
	'Student',
	'Gen Tech',
	'Church (St. Mary)',
	'I like/appreciate everybodys opinion and I liked seeing others perspectives and points of view.',
	true,
	true,
	true,
	false,
	false,
	true
	),
	(
	1,
	'Indian',
	'Reading, embroidery',
	'Engineer',
	'',
	'Community Centre',
	'',
	true,
	true,
	true,
	false,
	false,
	true
	),
	(
	1,
	'Indian',
	'My family, music',
	'Occupational Therapy',
	'',
	'',
	'',
	false,
	true,
	false,
	true,
	true,
	true
	),
	(
	1,
	'Caucasian',
	'Equitable access to the outdoors, health in our community',
	'Camp Director',
	'Gen X',
	'',
	'',
	true,
	false,
	false,
	false,
	false,
	true
	),
	(
	1,
	'Russian',
	'',
	'Russian Cultural Liason/C&TC Outreach',
	'Gen X',
	'Blanca',
	'Nice to meet new people and talk about differences',
	false,
	true,
	false,
	true,
	true,
	true
	),
	(
	1,
	'Latino',
	'',
	'Homemaker',
	'Boomer',
	'Friend',
	'',
	true,
	true,
	true,
	false,
	false,
	true
	),
	(
	1,
	'Caucasian',
	'Exercise and healthy living',
	'Public Health',
	'Gen X',
	'Scott County Public Health',
	'Good cross section of people',
	true,
	true,
	true,
	false,
	true,
	false
	),
	(
	1,
	'Caucasian',
	'Public Service/Ministry',
	'County Commissioner/Minister',
	'Boomer',
	'Scott County',
	'Authentic conversation, out of my "comfort zone". Thank you for the experience.',
	true,
	true,
	false,
	true,
	true,
	false
	),
	(
	1,
	'Pacific Islander',
	'Family; making the world a better place',
	'Attorney, Administrator',
	'',
	'Scott County Public Health',
	'Inspiring; great gathering of amazing people',
	true,
	true,
	false,
	false,
	false,
	false
	),
	(
	1,
	'Caucasian',
	'Family, culture, health, helping others',
	'HR',
	'Gen X',
	'Shakopee Diversity Alliance',
	'I am pleased to have the event in Shakopee. I am working with citizens on many levels so to see this group come together tonight is an amazing dream.',
	true,
	true,
	false,
	true,
	true,
	false
	),
	(
	1,
	'Norwegian',
	'Health',
	'Paramedic',
	'Boomer',
	'',
	'',
	false,
	true,
	false,
	false,
	false,
	true
	),
	(
	1,
	'Caucasian',
	'Being with family, running, being outdoors',
	'Parks and Recreation Director',
	'Gen X',
	'Scott County Work Group',
	'It was great to meet new people and share experiences',
	true,
	true,
	false,
	false,
	false,
	true
	),
	(
	1,
	'Somali',
	'Learning',
	'Nursing Assistant',
	'Gen X',
	'Friend',
	'Very good met very educated people. Learned a lot about health',
	true,
	true,
	true,
	true,
	true,
	true
	),
	(
	1,
	'Caucasian',
	'My son, being outdoors, learning, cooking',
	'Physical Therapy, Home Care',
	'Millenial',
	'Email from Scott County Volunteers',
	'Very fun',
	true,
	true,
	true,
	true,
	true,
	true
	)
;

INSERT INTO freeform (threesixty_id, title, content, row_public)
VALUES
	('1',
	'"Heard in the Hall"',
	'Here’s what participants had to say about their experience:

	➢	“Thank you for creating a safe place to engage others who are different than ourselves, and the freedom to be vulnerable and learn from each other.” – Public Health Professional 

	➢	“Thank you! I struggle with feelings of helplessness and hopelessness.” – Trainer for Child Support Workers, MN State Human Services 

	➢	“I enjoyed the space, the conversations and especially the engaging activities.” Hmong Small Business Owner
	
		➢	“Loved conversations, ideation, inclusion and removal of power dynamic.” – Community Health & Wellbeing Partnership Specialist  

	➢	“Great experience and networking! Thanks for bringing this group together. Very educational…I will be back.” – YMCA Staff Member

	➢	“This was very needed and specifically on this day when I struggle with if what I do is enough.” – Client Service Representative / Case Manager 

	➢	“I enjoyed the facilitation that brought people the safety to share freely.” – Social Worker

	➢	“It is very interactive and enlightening.” – Healthcare Professional 

	➢	“It was profound and emotional for me.” – Public Health Professional 

	➢	“Uplifting and supportive; [I] made a good connection with someone I will contact after today. Thank you! Great food.” – Retired ESL Teacher

	➢	“Every time I attend a Marnitas Table event, it never ceases to amaze me with all the wonderful conversation and interactions that occur. Events like these are essential to the healing of our communities.” – Community Improvement Coordinator

	➢	“Eye opening - how many people from diverse experiences are noticing the same challenges and barriers and frustrations to achieving wellness and healing that I have seen/noticed.” – EMT/Paramedic

	➢	“I am grateful to be in the room speaking and learning about resources to combat trauma, depression, and mental illness.” – Teacher, Writer & Creative 

	➢	“Exciting and affirming conversations!” – Project Director & Women’s Service Lead for Women, Children & Families, ISUD

	➢	“Really enjoyed the table conversation. Excellent!” – Chaplain 

	➢	“Thank you, what an amazing day! This experience serves to build on personal and professional wellbeing and the ability to serve.” – LADC Therapist 

	➢	“Thank you so much for creating this space. As a therapist, I work to provide the space for change. Just the opportunity to change – really change – is transformative. So many are not given any space for real change. So, I deeply appreciate the work it takes to provide this space for us. Thank you.” – Therapist 

	➢	“[The] cohort of people here willing to interact and present makes this a rich and healing environment. Love the pop-ups. Marnita sets the tone perfectly.” – Twin Cities Public Television Staff 

	➢	“It is encouraging to be with so many people who care about this subject. Discussing the systemic issues and toxic environments was helpful for my work.” – Educator
	
		➢	“Reinforced [my] belief[s] about the role of belonging and identity, as well as [the] need to focus on wellbeing at corp.” – Mental Health Promotion Specialist

	➢	“This was one of the first experiences of a safe place for ALL members of community regardless of race, religion, ethnicity, sexual orientation, ability, or even dietary. Truly a shift, a challenge, and a hope to me moving forward.” – Fundraising Professional 

For more participant-submitted comments and feedback, please see the attached Demo Data report.',
	true
	)
;

INSERT INTO upload (threesixty_id, title, url)
VALUES
	(
	1,
	'12 Years of Radical Hospitality',
	'https://www.marnitastable.org/wp-content/uploads/2018/12/MTI_annual-report_2017.pdf'
	),
	(
	1,
	'Sustainable Progress',
	'https://www.marnitastable.org/wp-content/uploads/2017/08/Marnitas-Table-2016-Annual-Report.pdf'
	)
;

INSERT INTO circle_share (threesixty_reports_id, question, responses)
VALUES 
	('1', 
	'What is one word summarizing your experience here today (bolded in the transcript below) and one action you have been inspired to commit to as a result of today’s unConference?', 
	'
	INSPIRED: I’m planning to follow through with people in this room to see how we can shift systems.
	ENERGIZED: I will connect with people I met here today who are outside of my world.
	REJUVENATION: I’ve had to take a break from working in Human Services, but today has inspired me to pick up where I left off.
	INSPIRED: Give people space to tell their story.
	PLAYFUL: Inspired to keep showing up as a vulnerable and playful leader.
	GRATEFUL/OVERWHELMED: Continue working for change.
	ABUNDANT: I want to take this example of abundance to a group I work with in NW MN on reducing alcohol and substance abuse.
	REMINDED: Start by following up on all of the business cards I got today.
	EXPANDED: Work with a mindfulness practitioner to bring that practice to the homeless community.
	INSPIRED: Do what is good and what is life-affirming.
	EDUCATED (ABOUT BEYONCE): It was good to get out of my own little world to see other perspectives on what I do. I’ll take this back to my students and share with them what I learned today, as well as to my research.
	INSPIRED: Take what happened to my workplace and see what we can do.
	INSPIRED: More peer support!
	GROUNDED: I’m going to reflect and notice how I’m feeling, continue to take that energy forward.
	CONNECTED: Build on community connections that exist and take new action.
	INSPYRED (WITH A Y): If I could just inspire myself, well that’s the action I need.
	APPRECIATION: I will be responsive to the people who asked to talk more to me or get stuff from me and continue to work to advanced systems change.
	LIFTED: Make more connections.
	EMPOWERED: I’ll go back to my community and continue to work to promote lifestyle medicine education and self-care.
	EXCITED: To get going with lobbying season
	ENLIGHTENED: Walk out with more friends than I walked in.
	INSPIRED AND HOPEFUL: Everyone in this room is adding to humanity, we need more actions to build on our humanity.
	WHOLE: I feel like I’ve been spoken to in many different realms, I’m going to follow up with all you folks to increase wellness in school.
	CHALLENGED: My opinions have been challenged about nine medical ways people can be happier and healthier.
	"GRUNTLED": I often think the opposite of hopelessness isn’t hope, it’s certainty. I need to take the action of doing nothing as a form of self-care, just being and having a calm way of connecting to get to the work I do in the 12-step arena and medical marijuana.
	HOPEFUL: I came in not knowing what to expect being military myself, I am familiar with resilience and I love social justice – so thank you to everyone here.
	CONTEMPLATIVE: Still thinking about self-care and how I can best listen to the voices I connect with in my job and provide advocacy or others who can provide needed resources.
	EMOTIONAL: I want to be better at acknowledging the pain of the people I work with.
	CONNECTED: Feeling a sense of momentum.
	OPTIMISTIC: Know that there’s an undercurrent of change going on.
	ENLIGHTENED THROUGH CONVERSATIONS WITH PEOPLE OF DIFFERENT CULTURES AND BACKGROUNDS: Encouraged to make connections with people who can help with our work.
	POSITIVE: Knowing that we’re all working toward a positive outcome, I feel positive.
	SAFE: I feel safe to take the time to hear stories, to take time for self-care, to acknowledge the trauma that until today I didn’t realize brought me here; safe because I found a community – every person I talked to, their hearts are so much bigger than I could have guessed; safe, moving into the future, knowing that you’re there.
	GRATEFUL: My heart is so full, I escaped the stress in the office today.
	GRATEFUL: It’s unique to have everyone show up authentically and speak your truth – it doesn’t often happen in a professional context. Also contemplate about how to embed this in my work.
	CONTEMPLATIVE: To think about how to embed this work in the opportunities I have to influence things.
	CONNECTEDNESS: When community shows up, cares for one another and maximizes that connection – that’s healthy power.
	COMMUNITY: I haven’t been feeling very connected, but this is a space where I’ve been feeling connected to community.
	POTENT: There’s so much potency here in this room, it’s juicy; there’s this amazing potential that we are on the cusp of change, and this must change. We are all making this change together – I’m going to take all the things we’re collecting here today, turn it into a beautiful report and send that information back to you.
	')
;

INSERT INTO threesixty_freeform (threesixty_reports_id, title, content, row_public)
VALUES
	(1,
	'Resources for Prevention',
	'1. LevelUpFargo.org 

2. Start with Why (book)

3. Dr. Neil Nedely, MD
[Mentioned twice: Dr. Neil Nedley, MD – uses lifestyle medicine to improve mental wellness such as anxiety and depression.]

4. Living Deeply by Noetic Sciences (book) 

5. Lotus Health Foundation & Rochester Clinic – 2019 Community of Wellness promoting lifestyle medicine to empower people for self-care.

6. Healthy work place pieces
a) Staff-led yoga
b) Nutrition information in break areas
c) Healthy food potlucks 

7. Dialectic Behavior Therapy (DBT) in elementary high schools 

8.  Center for Mind Body Medicine | www.cmbm.org Self-care resources. 

9. CBITS with adaption to culture

10. 7 Ways of Knowing, Being, Seeing | idownwind1@gmail.com | And medicine wheel teaching. 

11. White Earth Treatment

12. Youthprise | www.youthprise.org 

13. NACC Native American Community Clinic | 1213 E. Franklin – medical, dental, behavioral health, spiritual care.

14. Renewing Life at Pathways 

15. “Facing the Sun Campus” Healing Center, Grand Rapids, MN | Community building and healing. 

16. Listening House 

17. Resmaa Manakem, My Grandmother’s Hands  
[Mentioned thrice: “My Grandmother’s Hands – Resmaa Manekam;” “My Grandmother’s Hands, R. Menachem.”]

18. STAR – Strategies for Trauma Awareness and Resilience | www.mnpeace.org 

19. Your Body Keeps the Score (book)

20. Story Circles ➔ root causes ➔ solutions

21. Centered Spaces (healing and DEI) | www.centered-spaces.com  (Healer in Residence)
[Mentioned twice: “Centered Spaces’ Healer in Residence (centered-spaces.com) for workplace wellness.”]

22. MN Transgender Health Coalition 

23. www.LivingWorks.com | suicide awareness + intervention training

24. 1-800-273-8255 (National) | (612) 379-6363 (Metro/Suicide)

25. Henry Emmons, M.D. The Chemistry of Calm, The Chemistry of Joy 

26. Penny George Institute, consulting psychiatrist

27. Minnesota Personalized Medicine 

28. Enhanced Central Nervous System Technology – www.voxxlife.com / 111126105

29. Collective Action Lab – Mill City Kids 

30. Evenpulse – Stephen & Elizabeth Robinson | Trauma, resiliency, and tools (military and high-stress settings).

31. The Cultural Wellness Center | Great resource for African/African American

32. Becoming Mrs. Burton by Susan Benton

33. BI Cities T.V. (Dec. 17 Year) 

34. Pride Institute 

35. World Pratt Association (transgender health) 

36. Bounce Back – Allina program in Buffalo and expanding to other communities

37. Kente Circle (Mental Health Services)

38. Oasis of Love (Domestic violence intervention / prevention)

39. Free Yoga for People of Color in South Minneapolis for people with mental health issues

40. Coalition for People of Color providers, specifically racial-ethnic communities 

41. New journey at Hennepin Health – Syl Jones

42. GONIA (Gathering of Native Americans)

43. Homeless Youth : Finding Home (documentary, www.TPT.org)

44. Everyday Trauma (www.TPT.org documentary)

45. Beloved Child, Diane Wilson 

46. Rescuing Littleroundhead: A Childhood in Stories by Syl Jones 

47. Reclaiming Sacred Tobacco (www.TPT.org) 

48. Lawyers Concerned for Lawyers 

49. Prema Yoga – Northfield 

50. Workplace wellness: modeling from leadership that family is first and supporting staff in a variety of ways with caring, loving-kindnesses 

51. Boneshaker – Grand Rapids, MN

52. Face It Together – Sioux Falls 

53. North Market – North Minneapolis

54. A Mind of Your Own, Kelly Brogan (book)

55. The Wellness Alchemist, Jean Nelson (612.508.4758) 

56. Certifying young people as meditation and yoga instructors
 
57. Qoya – through movement we remember our essence is wise, wild and free.

58. St. Paul Community Acupuncture

59. Meditation 

60. Bravo New Choices Therapy',
	true
	)
;

INSERT INTO threesixty_user ("user_id", "threesixty_id")
VALUES
	(3, 2);
