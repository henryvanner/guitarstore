import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import guitarShopApp from './reducers';
import {App} from './components/App';

const store = createStore(guitarShopApp);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

/*import {
	toggleFilter
	,addToCart
	,removeFromCart
	,changeItemQuantity
} from './actions';
console.log(store.getState());

const unsubscribe = store.subscribe(()=>{
	console.log(store.getState());
});

store.dispatch(toggleFilter({model:"t"}));
store.dispatch(toggleFilter({model:"st"}));
store.dispatch(toggleFilter({model:"fanfret"}));
store.dispatch(toggleFilter({model: "t"}));
store.dispatch(toggleFilter({manufacturer:"gibson"}));
store.dispatch(toggleFilter({manufacturer:"gibson"}));
store.dispatch(toggleFilter({manufacturer:"fender"}));
store.dispatch(addToCart(5));
store.dispatch(addToCart(12));
unsubscribe();*/