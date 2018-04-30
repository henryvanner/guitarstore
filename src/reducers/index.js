import {combineReducers} from 'redux';
import {
	TOGGLE_FILTER
	,ADD_TO_CART
	,REMOVE_FROM_CART
	,CHANGE_ITEM_QUANTITY
} from '../actions';

function filter (state = {model:[],manufacturer:[]},action){
	switch(action.type){
		case TOGGLE_FILTER:
			var i = null,
				attribute = Object.keys(action.filter)[0],
				value = action.filter[attribute],
				values = state[attribute].slice();

			if ( ( i = values.indexOf(value) ) === -1 ) {
				values.push(value);
			}else{
				values.splice(i,1);
			}
			return Object.assign({},state,{[attribute]:values});
		default:
			return state;
	}
}

function cart (state = [],action){
	switch (action.type){
		case ADD_TO_CART:
			var found = state.find(item=>item.item == action.item);
			if (!found) {
				return state.concat({item:action.item,quantity:1});	
			}
			return state.slice();
		case REMOVE_FROM_CART:
			return state.filter(item=>item.item!=action.item);
		case CHANGE_ITEM_QUANTITY:			
			return state.map(item=>{
				if (item.item == action.item) {
					return Object.assign({},item,{quantity:action.quantity});
				}
				return item;
			});
		default:
			return state;
	}
}

const guitarShopApp = combineReducers({
	filter,
	cart
});

export default guitarShopApp;