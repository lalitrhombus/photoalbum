import { combineReducers } from 'redux';
import usersReducer from './reducer_users';
import albumsReducer from './reducer_albums';
import photosReducer from './reducer_photos';


const rootReducer = combineReducers({
  users:usersReducer,
  albums:albumsReducer,
  photos:photosReducer
});

export default rootReducer;
