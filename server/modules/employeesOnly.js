const employeesOnly = (req, res, next) => {
  // check if employee
  if (req.user.access_id >= 4) {
    // They were authenticated! Employee may do the next thing
    next();
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
};

module.exports = { employeesOnly };
