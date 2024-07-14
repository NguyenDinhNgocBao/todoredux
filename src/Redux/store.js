import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer); // Sử dụng createStore để khởi tạo store

export default store;
