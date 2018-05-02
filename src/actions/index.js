import fetch from 'cross-fetch';

export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const ADD_TO_CART ='ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';

export const REQUEST_SERVER_DATA = 'REQUEST_SERVER_DATA';
export const RECEIVE_SERVER_DATA = 'RECEIVE_SERVER_DATA';
export const ERROR_ON_FETCHING_DATA = 'ERROR_ON_FETCHING_DATA';

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
export function requestServerData (){	
	return {
		type: REQUEST_SERVER_DATA		
	}
}
export function receiveServerData (json){
	return{
		type: RECEIVE_SERVER_DATA,
		guitars: json
	}
}

function shouldFetchData (state){
	if (state.serverData.guitars.length == 0) {
		return true;
	}
	return false;
}
function fetchServerData (){
	return dispatch =>{
		dispatch(requestServerData());
		return fetch("http://localhost:3000/guitars")
		.then(response=>response.json(),
			error=>console.log('Something wrong happened!',error))
		.then(json=>dispatch(receiveServerData(json)));
	}
}
export function fetchServerDataIfNeeded (){
	return (dispatch,getState)=>{
		if (shouldFetchData(getState())) {
			return dispatch(fetchServerData());
		}else{
			return Promise.resolve();
		}
	}
}