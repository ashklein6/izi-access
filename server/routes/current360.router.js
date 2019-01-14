const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const goalsRows = ['Total Number', 'Number of People of Color/Indigenous', 'Number of People Under 24', 
    'Measurable Indicators of Success: 80% of participants met 1 new person across race, class, culture or other means of self-identity', 
    'Measurable Indicators of Success: 80% of participants met 2 new people across race, class, culture or other means of self-identity',
    'Measurable Indicators of Success: 80% of participants say that they met someone across self-identity with whom they planned to stay in touch or collaborate',
    'Measurable Indicators of Success: 40% of participants plan to tell someone about their experience',
    'Measurable Indicators of Success: first time at the table', 'Interested in future conversations about preventing child abuse and neglect',
    'Interested in future conversations about housing', 'Interested in future conversations about transportation', 
    'Interested in future conversations about education', 'Measurable Indicators of Success 6: total number of sign-in sheets'];
const dashboardRows = ['Date(s)','Timeline', 'Six Weeks - 1 Month Out', '3 Weeks Out', '2 Weeks - 1 Week Out', 'Day of Event', 
    '1-2 Weeks After', '1 Month After', 'Time(s)', 'Location(s)', 'Number Attending', 'Fun Title of Theme', 'Demographic of Attendees', 
    'Goals of Interactions', 'Measurable Indicators of Success', 'Invite Example Language', 'Invite Example Language', 
    'Flowverview', 'Proposed Questions', 'Opening Questions/Around-the-Room Questions', 'Topic-Specific Questions', 
    'Sticky Stats/Community Snapshots', 'Scavenger Hunt', 'Human Survey', 'Lightning Rounds', 'Resource Wall', 'Menu', 'Tools'];

// Setup a GET route to get a 360 section
router.get('/section', (req, res) => {
  let section = req.query.section;
  let current360Id = req.query.current360Id;

  let queryText = '';

  switch (section) {
    case 'goalsAssessment':
      queryText = 'SELECT * FROM goals WHERE threesixty_id=$1 ORDER BY id'; break;
    case 'dashboard':
      queryText = `SELECT * FROM dashboard WHERE threesixty_id=$1 ORDER BY id;`; break;
    case 'threesixty_reports':
      queryText = `SELECT * FROM threesixty_reports WHERE threesixty_id=$1 ORDER BY id;`; break;
    case 'analysis_recommendation':
      queryText = `SELECT * FROM analysis_recommendation WHERE threesixty_id=$1 ORDER BY id;`; break;
    case 'demographics':
      queryText = `SELECT * FROM demographic WHERE threesixty_id=$1 ORDER BY id;`; break;
    case 'sticky_stats':
      queryText = ``; break;
    case 'circle_share':
      queryText = `SELECT * FROM circle_share WHERE threesixty_reports_id=$1 ORDER BY id;`; break;
    case 'question_set':
      queryText = `SELECT question_set.id AS question_set_id, threesixty_reports_id, set_title, breakdown, questions.id AS question_id, response.id AS response_id, response, response_category.id AS response_category_id, description AS response_category_description FROM question_set
      LEFT JOIN questions ON questions.set_id = question_set.id
      LEFT JOIN response ON response.question_id = questions.id
      LEFT JOIN response_category ON response_category.id = response.category_id
      WHERE threesixty_reports_id=$1 ORDER BY question_set.id;`; break;
    case 'oral_report':
      queryText = `SELECT * FROM oral_report WHERE threesixty_reports_id=$1 ORDER BY id`; break;
  }
  
  console.log('GET request for 360 section:', section, 'current 360 id:', current360Id);
  
  if (queryText !== '') {
    pool.query(queryText, [current360Id])
        .then( (results) => {
            console.log('successful with section:', section);
            res.send(results.rows);
        }).catch( (error) => {
            console.log('error on get:', error);
            res.sendStatus(500);
        })
  } else {
      res.sendStatus(400);
  }
})

// Setup a GET route to get current 360 information
router.get('/info', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT threesixty.id, name, date, location, category_id, category, client, description,
    published_status, analysis_recommendation_public, threesixty_reports_public, dashboard_public,
    goals_public, demographics_public, oral_report_public, question_set_public, circle_share_public,
    threesixty_freeform_public, freeform_public, upload_public, analysis_recommendation_published, 
    threesixty_reports_published, dashboard_published, goals_published, demographics_published, 
    oral_report_published, question_set_published, circle_share_published,
    threesixty_freeform_published, freeform_published, upload_published FROM threesixty
    JOIN izi_categories ON izi_categories.id = threesixty.category_id
    WHERE threesixty.id=$1`;
    
    console.log('GET request for current 360 information. current 360 id:', current360Id);
    
    pool.query(queryText, [current360Id])
        .then( (results) => {
            console.log('successful with 360 information');
            res.send(results.rows);
        }).catch( (error) => {
            console.log('error on get:', error);
            res.sendStatus(500);
        })
    }
);


// Setup a GET route to get 360 section goalsAssessment
router.get('/goalsAssessment', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = 'SELECT * FROM goals WHERE threesixty_id=$1 ORDER BY id';
    
    console.log('GET request for 360 section goalsAssessment. current 360 id:', current360Id);
    
    pool.query(queryText, [current360Id])
        .then( (results) => {
            console.log('successful with goalsAssessment');
            res.send(results.rows);
        }).catch( (error) => {
            console.log('error on get:', error);
            res.sendStatus(500);
        })
    }
);


// Setup a GET route to get 360 section dashboard
router.get('/dashboard', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM dashboard WHERE threesixty_id=$1 ORDER BY id;`;
    
    console.log('GET request for 360 section dashboard. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with dashboard');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
})

// Setup a GET route to get 360 section threesixty_reports
router.get('/threesixty_reports', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM threesixty_reports WHERE threesixty_id=$1 ORDER BY id;`;
    
    console.log('GET request for 360 section threesixty_reports. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with threesixty_reports');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
})

// Setup a GET route to get 360 section analysis_recommendation
router.get('/analysis_recommendation', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM analysis_recommendation WHERE threesixty_id=$1 ORDER BY id;`;
    
    console.log('GET request for 360 section analysis_recommendation. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with analysis_recommendation');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
})

// Setup a GET route to get 360 section demographics
router.get('/demographics', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM demographic WHERE threesixty_id=$1 ORDER BY id;`;
    
    console.log('GET request for 360 section demographics. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with demographics');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
})

// Setup a GET route to get 360 section circle_share
router.get('/circle_share', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM circle_share WHERE threesixty_reports_id=$1 ORDER BY id;`;
    
    console.log('GET request for 360 section circle_share. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with circle_share');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
})

// Setup a GET route to get 360 section question_set
router.get('/question_set', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT question_set.id AS question_set_id, threesixty_reports_id, set_title, breakdown, questions.id AS question_id, response.id AS response_id, response, response_category.id AS response_category_id, description AS response_category_description FROM question_set
    LEFT JOIN questions ON questions.set_id = question_set.id
    LEFT JOIN response ON response.question_id = questions.id
    LEFT JOIN response_category ON response_category.id = response.category_id
    WHERE threesixty_reports_id=$1 ORDER BY question_set.id;`;
    
    console.log('GET request for 360 section question_set. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with question_set');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
})

// Setup a GET route to get 360 section oral_report
router.get('/oral_report', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM oral_report WHERE threesixty_reports_id=$1 ORDER BY id`;
    
    console.log('GET request for 360 section oral_report. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with oral_report');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
});

router.get('/chart_data', (req, res) => {
    let data = [];
    let current360Id = req.query.current360Id;
    let queryText = `SELECT COUNT(*) - SUM(plans_to_tell::int) as plans_to_tell_no, SUM(plans_to_tell::int) as plans_to_tell_yes, 
                    COUNT(*) - SUM(first_time::int) as first_time_no, SUM(first_time::int) as first_time_yes, 
                    COUNT(*) - SUM(child_abuse::int) as child_abuse_no, SUM(child_abuse::int) as child_abuse_yes, 
                    COUNT(*) - SUM(housing::int) as housing_no, SUM(housing::int) as housing_yes, 
                    COUNT(*) - SUM(transportation::int) as transportation_no, SUM(transportation::int) as transportation_yes,
                    COUNT(*) - SUM(education::int) as education_no, SUM(education::int) as education_yes  
                    FROM demographic WHERE threesixty_id = $1;`;
    pool.query(queryText, [current360Id])
    .then((response) => {
        data = [
            {title: 'plans_to_tell', 
            data: [response.rows[0].plans_to_tell_yes, response.rows[0].plans_to_tell_no],
            legend: true},
            {title: 'first_time', 
            data: [response.rows[0].first_time_yes, response.rows[0].first_time_no]},
            {title: 'child_abuse', 
            data: [response.rows[0].child_abuse_yes, response.rows[0].child_abuse_no]},
            {title: 'housing',
            data: [response.rows[0].housing_yes, response.rows[0].housing_no]},
            {title: 'transportation', 
            data: [response.rows[0].transportation_yes, response.rows[0].transportation_no]},
            {title: 'education', 
            data: [response.rows[0].education_yes, response.rows[0].education_no]},
        ];
        res.send(data);
    })
    .catch(() => {
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/complete', async (req, res) => {
    const new360 = req.body.data; 
    const client = await pool.connect();
    let id;

    try {
        await client.query('BEGIN');
        id = await client.query(`INSERT INTO threesixty (name, date, location, category_id, client, description, published_status) 
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id`, [new360.name, new360.date, new360.location, new360.category, new360.client, new360.description, true]);
        await client.query(`INSERT INTO analysis_recommendation (threesixty_id) VALUES ($1)`, [id.rows[0].id]);
        for(let row of dashboardRows){
            await client.query(`INSERT INTO dashboard (threesixty_id, row_title) VALUES ($1, $2)`, [id.rows[0].id, row]);
        };
        for(let row of goalsRows){
            await client.query(`INSERT INTO goals (threesixty_id, description) VALUES ($1, $2)`, [id.rows[0].id, row]);
        };
        const threesixty_reports_id = await client.query(`INSERT INTO threesixty_reports (threesixty_id) VALUES ($1) RETURNING id`, [id.rows[0].id]);
        await client.query(`INSERT INTO oral_report (threesixty_reports_id, group_num) VALUES ($1, $2)`, [threesixty_reports_id.rows[0].id, 1]);
        await client.query(`INSERT INTO circle_share (threesixty_reports_id) VALUES ($1)`, [threesixty_reports_id.rows[0].id]);
        const set_id = await client.query(`INSERT INTO question_set (threesixty_reports_id, set_title) VALUES ($1, $2) RETURNING id`, [threesixty_reports_id.rows[0].id, 'QUESTION 1']);
        await client.query(`INSERT INTO questions (set_id) VALUES ($1)`, [set_id.rows[0].id]);
        await client.query('COMMIT'); 
    } catch (error) {
        await client.query('ROLLBACK');
        console.log('error doing the thing');
        throw error;   
    } finally {
        client.release();
    }
    return res.send(id.rows[0]);
});

router.post('/lowdown', async (req, res) => {
    const new360 = req.body.data;
    const client = await pool.connect();
    let id;

    try {
        await client.query('BEGIN');
        id = await client.query(`INSERT INTO threesixty (name, date, location, category_id, client, description) 
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id`, [new360.name, new360.date, new360.location, new360.category, new360.client, new360.description]);
        for(let row of goalsRows){
            await client.query(`INSERT INTO goals (threesixty_id, description) VALUES ($1, $2)`, [id.rows[0].id, row]);
        };
        const threesixty_reports_id = await client.query(`INSERT INTO threesixty_reports (threesixty_id) VALUES ($1) RETURNING id`, [id.rows[0].id]);
        const set_id = await client.query(`INSERT INTO question_set (threesixty_reports_id, set_title) VALUES ($1, $2) RETURNING id`, [threesixty_reports_id.rows[0].id, 'QUESTION 1']);
        await client.query(`INSERT INTO questions (set_id) VALUES ($1)`, [set_id.rows[0].id]);
        await client.query('COMMIT'); 
    } catch (error) {
        await client.query('ROLLBACK');
        console.log('error doing the thing');
        throw error;   
    } finally {
        client.release();
    }
    return res.send(id.rows[0]);
});

// Change publish status of a section or entire 360 (published_status)
router.put('/publish/:id', async (req,res) => {
    console.log('in current360.router.js PUT for /current360/publish');
    let current360Id = req.params.id;
    let field = req.body.field;
    let status = req.body.status;
    let queryText = '';
    console.log('current360Id:', current360Id, 'field:', field, 'status:', status);
    switch (field) {
        case 'published_status':
            queryText = `UPDATE threesixty SET published_status = $2 WHERE id=$1;`; break;
        case 'analysis_recommendation_published':
            queryText = `UPDATE threesixty SET analysis_recommendation_published = $2 WHERE id=$1;`; break;
        case 'threesixty_reports_published':
            queryText = `UPDATE threesixty SET threesixty_reports_published = $2 WHERE id=$1;`; break;
        case 'dashboard_published':
            queryText = `UPDATE threesixty SET dashboard_published = $2 WHERE id=$1;`; break;
        case 'goals_published':
            queryText = `UPDATE threesixty SET goals_published = $2 WHERE id=$1;`; break;
        case 'demographics_published':
            queryText = `UPDATE threesixty SET demographics_published = $2 WHERE id=$1;`; break;
        case 'oral_report_published':
            queryText = `UPDATE threesixty SET oral_report_published = $2 WHERE id=$1;`; break;
        case 'question_set_published':
            queryText = `UPDATE threesixty SET question_set_published = $2 WHERE id=$1;`; break;
        case 'circle_share_published':
            queryText = `UPDATE threesixty SET circle_share_published = $2 WHERE id=$1;`; break;
        case 'threesixty_freeform_published':
            queryText = `UPDATE threesixty SET threesixty_freeform_published = $2 WHERE id=$1;`; break;
        case 'freeform_published':
            queryText = `UPDATE threesixty SET freeform_published = $2 WHERE id=$1;`; break;
        case 'upload_published':
            queryText = `UPDATE threesixty SET upload_published = $2 WHERE id=$1;`; break;
    }
    console.log('queryText:', queryText);
    if (queryText !== '') {
        pool.query(queryText, [current360Id, status])
        .then( (results) => {
            console.log('successful with publish');
            res.sendStatus(200);
        }).catch( (error) => {
            console.log('error on publish:', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(400);
    }
})

// Change public status of a section
router.put('/public/:id', async (req,res) => {
    console.log('in current360.router.js PUT for /current360/public');
    let current360Id = req.params.id;
    let field = req.body.field;
    let status = req.body.status;
    let queryText = '';
    console.log('current360Id:', current360Id, 'field:', field, 'status:', status);
    switch (field) {
        case 'analysis_recommendation_public':
            queryText = `UPDATE threesixty SET analysis_recommendation_public = $2 WHERE id=$1;`; break;
        case 'threesixty_reports_public':
            queryText = `UPDATE threesixty SET threesixty_reports_public = $2 WHERE id=$1;`; break;
        case 'dashboard_public':
            queryText = `UPDATE threesixty SET dashboard_public = $2 WHERE id=$1;`; break;
        case 'goals_public':
            queryText = `UPDATE threesixty SET goals_public = $2 WHERE id=$1;`; break;
        case 'demographics_public':
            queryText = `UPDATE threesixty SET demographics_public = $2 WHERE id=$1;`; break;
        case 'oral_report_public':
            queryText = `UPDATE threesixty SET oral_report_public = $2 WHERE id=$1;`; break;
        case 'question_set_public':
            queryText = `UPDATE threesixty SET question_set_public = $2 WHERE id=$1;`; break;
        case 'circle_share_public':
            queryText = `UPDATE threesixty SET circle_share_public = $2 WHERE id=$1;`; break;
        case 'threesixty_freeform_public':
            queryText = `UPDATE threesixty SET threesixty_freeform_public = $2 WHERE id=$1;`; break;
        case 'freeform_public':
            queryText = `UPDATE threesixty SET freeform_public = $2 WHERE id=$1;`; break;
        case 'upload_public':
            queryText = `UPDATE threesixty SET upload_public = $2 WHERE id=$1;`; break;
    }
    console.log('queryText:', queryText);
    if (queryText !== '') {
        pool.query(queryText, [current360Id, status])
        .then( (results) => {
            console.log('successful with public');
            res.sendStatus(200);
        }).catch( (error) => {
            console.log('error on public:', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(400);
    }
})

// Edit the 360 information section
router.put('/edit/info/:id', async (req,res) => {
    console.log('in current360.router.js PUT for /current360/edit/info');
    let current360Id = req.params.id;
    let newData = req.body;
    console.log('to update info to:', newData);
    let queryText = `UPDATE threesixty SET name=$1, date=$2, location=$3, category_id=$4, client=$5, description=$6
    WHERE id=$7`;

    pool.query(queryText, [newData.name, newData.date, newData.location, newData.category_id, newData.client,
        newData.description, current360Id])
    .then( (results) => {
        console.log('successful with editing info');
        res.sendStatus(200);
    }).catch( (error) => {
        console.log('error on editing info:', error);
        res.sendStatus(500);
    })
})

// Edit the goals assessment section
router.put('/edit/goalsAssessment/:id', (async (req, res) => {
    console.log('in current360.router.js PUT for /current360/edit/goalsAssessment');
    let current360Id = req.params.id;
    let newData = req.body;
    console.log('to update goals to:', newData);

    const client = await pool.connect();

    try {
        await client.query('BEGIN');
        Object.keys(newData).map(async (key) => {
            if (!isNaN(key)) {
                console.log('key.new:', newData[key].new, 'key.updated', newData[key].updated)
                if (newData[key].new) {
                    console.log('caught insert:', newData[key]);
                    await client.query(`INSERT INTO goals ("threesixty_id", "description", "desired", "delivered", "difference", "percent", "comments", "row_public")
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`, 
                    [current360Id, newData[key].description, newData[key].desired, newData[key].delivered,
                    newData[key].difference, newData[key].percent, newData[key].comments, newData[key].row_public])
                } else if (newData[key].updated) {
                    console.log('caught update:', newData[key]);
                    await client.query(`UPDATE goals
                    SET threesixty_id = $2,
                        description = $3, 
                        desired = $4, 
                        delivered = $5, 
                        difference = $6, 
                        percent = $7, 
                        comments = $8,
                        row_public = $9
                    WHERE id = $1;`, 
                    [newData[key].id, newData[key].threesixty_id, newData[key].description, newData[key].desired, newData[key].delivered, 
                    newData[key].difference, newData[key].percent, newData[key].comments, newData[key].row_public])
                } else if (newData[key] == 'deleted') {
                    console.log('caught delete:', newData[key]);
                    await client.query(`DELETE FROM goals WHERE id = $1;`, [key]);
                }
            };
        });
        await client.query('COMMIT');
    } catch (error) {
        await client.query('ROLLBACK');
        return res.status(500).send(error);
    } finally {
        client.release();
        return res.sendStatus(201)
    }
}))

module.exports = router;