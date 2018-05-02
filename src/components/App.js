import React from 'react';
import Store from '../containers/Store';
import Menu from '../containers/Menu';
import ShoppingCart from '../containers/ShoppingCart';

const filters = [{
	title:"Fabricante",
	attribute:"manufacturer",
	items:[{
		label:"Fender",
		value: "fender"
	},{
		label:"PRS",
		value: "prs"
	},{
		label: "Harly Benton",
		value: "harly-benton"
	},{
		label: "Epiphone",
		value: "epiphone"
	},{
		label:"Gibson",
		value:"gibson"
	}]
},{
	title:"Modelo",
	attribute:"model",
	items:[{
		label:"ST",
		value: "st"
	},{
		label:"T",
		value:"t"
	},{
		label:"Single cut",
		value:"single-cut"
	},{
		label:"Fanfret",
		value:"fanfret"
	}]
}];

export class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {viewingStore:true};
		this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
		this.handleContinueShoppingClick = this.handleContinueShoppingClick.bind(this);
	}
	handleMenuItemClick(e){
		this.setState({viewingStore:!this.state.viewingStore});
	}
	handleContinueShoppingClick(e){
		this.setState({viewingStore:true});
	}
	render(){
		return (
			<React.Fragment>
				<Menu viewingStore={this.state.viewingStore} onMenuItemClick={this.handleMenuItemClick}/>
				<div id="main-container">
					{this.state.viewingStore?<Store filters={filters} />:<ShoppingCart onContinueShopping={this.handleContinueShoppingClick}/>}
				</div>
			</React.Fragment>
		);
	}
}