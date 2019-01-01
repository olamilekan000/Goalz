import React from 'react'
import { connect } from 'react-redux'
import { createGoalAction } from '../store/actions/createGoal'
import Form from './form'

class Todo extends React.Component {

	state = {
		goal: ''
	}

	getGoal = e => {
		e.preventDefault()

		this.props.createGoal(this.state)
		this.setState({ goal: '' })
		
	}

	handleChange = value => {
		this.setState({ goal: value })
	}

	render(){
		return(
			<div>
			  <div className="row">
			  	<Form 
			  		formAction={this.getGoal} 
			  		value={this.state.goal}
			  		handleChange={this.handleChange}
			  		btnName={`Add Button`}
			  	/>
			  </div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createGoal: (goal) => { dispatch(createGoalAction(goal))}
	}
}

export default connect(null, mapDispatchToProps)(Todo)
