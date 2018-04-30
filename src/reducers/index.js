import {TOGGLE_FILTER} from '../actions';

const initialState = {
	filter:{model:[],manufacturer:[]}
};

function guitarShopApp(state = initialState,action){
	switch(action.type){
		case TOGGLE_FILTER:
			var i = null,
				attribute = Object.keys(action.filter)[0],
				value = action.filter[attribute],
				values = state.filter[attribute].slice();

			if ( ( i = values.indexOf(value) ) === -1 ) {
				values.push(value);
			}else{
				values.splice(i,1);
			}
			return Object.assign({},state,{filter:Object.assign({},state.filter,{[attribute]:values})})
		default:
			return state;
	}
}

export default guitarShopApp;