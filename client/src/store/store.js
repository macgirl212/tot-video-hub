import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './reducers/NavbarReducer';

const store = configureStore({ reducer: navbarReducer });

export default store;
