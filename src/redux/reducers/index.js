import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import current360 from './current360Reducer';
import all360s from './all360sReducer';
import allUsers from './allUsersReducer';
import userControls from './userControlsReducer';
import iziCategories from './iziCategoriesReducer';
import userAccessLevel from './userAccessLevelReducer';



// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  current360, // stores the ID for the 360 currently being worked on or edited
  all360s, // stores general info for all 360s to be displayed in tables
  allUsers, // stores user info for all users to be displayed on the user tables
  userControls, // stores user information to be able to control user information (REVIEW)
  iziCategories, //stores izi category types to be used throughout the application
  userAccessLevel, // stores the various access levels for selection when filtering users
});

export default rootReducer;
