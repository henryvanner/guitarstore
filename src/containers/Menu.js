import {connect} from 'react-redux';
import Navbar from '../components/Navbar';

const mapStateToProps = (state,ownProps) => {
	return {
		totalCartItems: state.cart.length		
	}
}
const Menu = connect(mapStateToProps)(Navbar);

export default Menu;