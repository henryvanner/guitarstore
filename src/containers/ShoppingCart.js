import {connect} from 'react-redux';
import {removeFromCart,changeItemQuantity} from '../actions';
import Cart from '../components/Cart';

function getCartItems (guitars,cart){
	var items = guitars.map(guitar=>{
		var cartInfo = cart.find(item=>item.item == guitar.id);
		if (cartInfo) {
			guitar["quantity"] = cartInfo.quantity;
			return guitar;
		}
		return null;
	});
	return items.filter(item=>item);
}

const mapStateToProps = (state,ownProps) => {
	return {
		items: getCartItems(ownProps.guitars,state.cart)
	}
}

const mapDistpachToProps = (dispatch,ownProps) => {
	return {
		onRemoveFromCart: (e)=>{
			dispatch(removeFromCart(e.target.parentElement.dataset.id));
		},
		onChangeQuantity: (e)=>{
			dispatch(changeItemQuantity(e.target.parentElement.dataset.id,e.target.value));
		}
	}
}

const ShoppingCart = connect(mapStateToProps,mapDistpachToProps)(Cart);

export default ShoppingCart;