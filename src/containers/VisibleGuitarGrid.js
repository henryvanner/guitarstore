import {connect} from 'react-redux';
import GuitarGrid from '../components/GuitarGrid';
import {addToCart} from '../actions';

function getVisibleGuitars (guitars,filter){
	return guitars.filter(guitar=>(filter.model.length === 0 || filter.model.indexOf(guitar.model) != -1)
		&& (filter.manufacturer.length === 0 || filter.manufacturer.indexOf(guitar.manufacturer) != -1));
}
const mapStateToProps = (state,ownProps)=>{
	return {
		guitars: getVisibleGuitars(ownProps.guitars,state.filter)
	}
}
const mapDispatchToProps = (dispatch,ownProps)=>{
	return {
		onAddToCart: (e)=>{
			dispatch(addToCart(e.target.dataset.id));
		}
	}
}

const VisibleGuitarGrid = connect(mapStateToProps,mapDispatchToProps)(GuitarGrid);

export default VisibleGuitarGrid;