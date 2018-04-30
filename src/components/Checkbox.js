import React from 'react';

function Checkbox (props){
	return (
		<div className="form-check">
			<input className="form-check-input" type="checkbox" value={props.value} id={props.id} checked={props.checked} onChange={props.onChange}/>
			<label className="form-check-label" htmlFor={props.id}>{props.label}</label>
		</div>
	);
}

export default Checkbox;