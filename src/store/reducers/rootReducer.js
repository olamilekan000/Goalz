import { combineReducers } from 'redux';
import getGoal  from './createGoal'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
	firestoreGoals: firestoreReducer,
	getGoal: getGoal
})

export default rootReducer
