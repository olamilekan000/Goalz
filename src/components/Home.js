import React from 'react'

import Todo from './Todo'
import Goals from './Goals'
import { connect } from 'react-redux'

class Home extends React.Component {
	render(){
		return(
			<div className="container">
				<Todo />
				<Goals />			
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		propsData: state
	}
}

export default connect(mapStateToProps)(Home)
