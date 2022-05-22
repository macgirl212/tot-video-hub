import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers/Navbar';

const store = configureStore({ reducer: reducer });

export default store;
