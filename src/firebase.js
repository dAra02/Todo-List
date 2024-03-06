import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyCWlY9auSE45LaBbnMj5SeNw_nYOnx2sqU',
	authDomain: 'todolist-a371e.firebaseapp.com',
	projectId: 'todolist-a371e',
	storageBucket: 'todolist-a371e.appspot.com',
	messagingSenderId: '563850920713',
	appId: '1:563850920713:web:7e766e2378685d6e3749d8',
	databaseURL: 'https://todolist-a371e-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
