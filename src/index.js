import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import thunkMiddleware from 'redux-thunk';

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import guitarShopApp from './reducers';
import {App} from './components/App';

const store = createStore(guitarShopApp,applyMiddleware(thunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

import {
	toggleFilter
	,addToCart
	,removeFromCart
	,changeItemQuantity
	,fetchServerData
} from './actions';
console.log(store.getState());

const unsubscribe = store.subscribe(()=>{
	console.log(store.getState());
});

store.dispatch(fetchServerData())
	.then(()=>console.log(store.getState()));

unsubscribe();