import React from 'react'

const Form = (props) => (
    <form className="col s12" style={{ marginTop: '70px' }} onSubmit={ props.formAction }>
    	<input 
    		type="text"  
    		onChange={ e => { props.handleChange(e.target.value) } }
    		value={props.value}
    		required
    		/>
    	<div className='center'>
    		<button 
    			className='btn btn-large blue' 
    			onClick={ props.formAction }>
    			{ props.btnName }
    		</button>
    	</div>
    </form>
)

export default Form 
