import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteGoal, getAGoal } from '../store/actions/createGoal'

const Goals = (props) => {
	console.log(props)
	const { goal, deleteGoal, getAGoal }  = props
	let styling
	let goals

	if(goal){

		styling = "collection"
		goals = ( goal.map( g => {
				return (
					<li className="collection-item" key={ g.id } >
						{ g.goal }
						<Link className='secondary-content' to='/' onClick={ () => deleteGoal(g.id) }>
							<i className='material-icons delete'>delete</i>
						</Link>
						<Link className='secondary-content' to={`${g.id}`}>
							<i className='material-icons edit'>edit</i>
						</Link>
					</li>
				)
			})
		)
	}else{
		goals = <h4 style={{ textAlign: 'center' }}>Loading...</h4>
		styling = ''
	}

	return (
		<div>
			<ul className={`${styling}`} style={{ marginTop: '70px' }}>
				{ goals }
			</ul>
		</div>
	)	
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteGoal: (id) => { dispatch(deleteGoal(id))},
		getAGoal: (id) => { dispatch(getAGoal(id))}
	}
}


const mapStateToProps = (state) => {
	console.log(state)
	return {
		goal: state.firestoreGoals.ordered.goalz
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([
		{ collection: 'goalz'}
	])
)(Goals)
