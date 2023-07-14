import { configureStore } from 'redux';
import userReducer from './userReducer';

const store = configureStore({
    user: userReducer,
});

export default store;
