import React from 'react'
import Form from './form'
import { connect } from 'react-redux'

import { getAGoal, updateGoal } from '../store/actions/createGoal'

class singleGoal extends React.Component {

	state = {
		goal: ''
	}

	componentDidMount(){
		let {id} = this.props.match.params
		this.props.getAGoal(id)
	}

	componentDidUpdate(prevProps) {
	  // Typical usage (don't forget to compare props):
	  if (this.props.getAGoalData !== prevProps.getAGoalData) {
	    const goal = this.props.getAGoalData.data
	    this.setState({goal: goal.goal})
	  }
	}

	handleChange = value => {
		this.setState({ goal: value })
	}

	updateGoal = e => {
		e.preventDefault()
		this.props.updateGoal(this.state, this.props.match.params.id)
		this.props.history.push('/')
	}	

	render() {
		return (
			<div>
				<div className='center'>
					<h4>Change Goal</h4>
					<div className='container'>
						<Form 
							value={this.state.goal}
							btnName={`Update Goal`}
							handleChange={this.handleChange}
							formAction={this.updateGoal}
						/>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getAGoal: (id) => { dispatch(getAGoal(id))},
		updateGoal: (updatedGoal, id) => { dispatch(updateGoal(updatedGoal, id)) }
	}
}

const mapStateToProps = (state) => {
	return {
		getAGoalData: state.getGoal
	}
} 

export default connect(mapStateToProps, mapDispatchToProps)(singleGoal)
