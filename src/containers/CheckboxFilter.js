import {connect} from 'react-redux';
import {toggleFilter} from '../actions';
import Checkbox from '../components/Checkbox';

const mapStateToProps = (state,ownProps)=>{
	return {
		id: ownProps.attribute.concat(ownProps.correlative),
		checked: state.filter[ownProps.attribute].indexOf(ownProps.value) != -1		
	}
}

const mapDispatchToProps = (dispatch,ownProps)=>{
	return {
		onChange: (e)=>{
			dispatch(toggleFilter({[ownProps.attribute]:e.target.value}))
		}
	}
}

const CheckboxFilter = connect(mapStateToProps,mapDispatchToProps)(Checkbox);

export default CheckboxFilter;