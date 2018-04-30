export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const ADD_TO_CART ='ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';

export function toggleFilter (filter){
	return {
		type: TOGGLE_FILTER,
		filter
	}
}
export function addToCart (item){
	return {
		type: ADD_TO_CART,
		item: item
	}
}
export function removeFromCart (item){
	return {
		type: REMOVE_FROM_CART,
		item: item
	}
}
export function changeItemQuantity (item,q){
	return {
		type: CHANGE_ITEM_QUANTITY,
		item:item,
		quantity:q
	}
}