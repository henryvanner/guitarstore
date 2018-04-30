import {connect} from 'react-redux';
import GuitarGrid from '../GuitarGrid';
import {guitars} from '../App';


function getVisibleGuitars (guitars,filter){
	return guitars.filter(guitar=>(filter.model.length === 0 || filter.model.indexOf(guitar.model) != -1)
		&& (filter.manufacturer.length === 0 || filter.manufacturer.indexOf(guitar.manufacturer) != -1));
}
const mapStateToProps = (state,ownProps)=>{
	return {
		guitars: getVisibleGuitars(guitars,state.filter)
	}
}

const VisibleGuitarGrid = connect(mapStateToProps)(GuitarGrid);

export default VisibleGuitarGrid;