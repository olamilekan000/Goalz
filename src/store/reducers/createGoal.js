
const getGoal = (state = {}, action) => {

	const { data } = action

	switch(action.type){
		case 'GET_GOAL':
			return {
				...state,
				data
			}
		default:
			return state		
	}
}

export default getGoal
