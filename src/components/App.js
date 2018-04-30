import React from 'react';
import Store from './Store';
import Menu from '../containers/Menu';
import ShoppingCart from '../containers/ShoppingCart';

const guitars = [{
	"id":1,
	"name":"Fender Jimi Hendrix Monterey Strat",
	"model":"st",
	"manufacturer":"fender",
	"price":899
},{
	"id":2,
	"name":"Fender Jimi Hendrix Strat OWH",
	"model":"st",
	"manufacturer":"fender",
	"price":799
},{
	"id":3,
	"name":"PRS SE Custom 24 Stealth Quilt LTD",
	"model":"st",
	"manufacturer":"prs",
	"price":168
},{
	"id":4,
	"name":"Harley Benton ST-62DLX VW Vintage Series",
	"model":"st",
	"manufacturer":"harly-benton",
	"price":198
},{
	"id":5,
	"name":"Harley Benton ST-59HM Fiesta Red Tribute",
	"model":"st",
	"manufacturer":"harly-benton",
	"price":899
},{
	"id":6,
	"name":"Fender Brad Paisley Road Worn Tele",
	"model":"t",
	"manufacturer":"fender",
	"price":1059
},{
	"id":7,
	"name":"Fender AM Original 50 Tele MN BTB",
	"model":"t",
	"manufacturer":"fender",
	"price":1699
},{
	"id":8,
	"name":"Fender Kotzen Telecaster BSB",
	"model":"t",
	"manufacturer":"fender",
	"price":1990
},{
	"id":9,
	"name":"Fender Standard Telecaster MN AW",
	"model":"t",
	"manufacturer":"fender",
	"price":549
},{
	"id":10,
	"name":"Fender AM Elite Telecaster EB 3TSB",
	"model":"t",
	"manufacturer":"fender",
	"price":1899
},{
	"id":11,
	"name":"Gibson Les Paul Tribute 2018 FHB",
	"model":"single-cut",
	"manufacturer":"gibson",
	"price":966
},{
	"id":12,
	"name":"Gibson Les Paul Tribute 2018 SG",
	"model":"single-cut",
	"manufacturer":"gibson",
	"price":966
},{
	"id":13,
	"name":"Epiphone Slash LP Standard Plustop Pro",
	"model":"single-cut",
	"manufacturer":"epiphone",
	"price":839
},{
	"id":14,
	"name":"Gibson Les Paul Standard 2018 MB",
	"model":"single-cut",
	"manufacturer":"gibson",
	"price":2650
},{
	"id":15,
	"name":"Epiphone Matt Heafy Snofall LP",
	"model":"single-cut",
	"manufacturer":"epiphone",
	"price":799
},{
	"id":16,
	"name":"Harley Benton Fanfret-8NT QEB 2018 DLX",
	"model":"fanfret",
	"manufacturer":"harly-benton",
	"price":398
},{
	"id":17,
	"name":"Harley Benton Fanfret-8NT QBB 2018 DLX",
	"model":"fanfret",
	"manufacturer":"harly-benton",
	"price":398
},{
	"id":18,
	"name":"Harley Benton Fanfret 7-TPB 2018 DLX",
	"model":"fanfret",
	"manufacturer":"harly-benton",
	"price":298
},{
	"id":19,
	"name":"Harley Benton Fanfret-7 BBB 2018 DLX",
	"model":"fanfret",
	"manufacturer":"harly-benton",
	"price":298
},{
	"id":20,
	"name":"Harley Benton Fanfret-7 TPB 2017 DLX",
	"model":"fanfret",
	"manufacturer":"harly-benton",
	"price":298
}];

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
//<Store filters={filters} guitars={guitars}/>
export class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {viewingStore:true};
		this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
	}
	handleMenuItemClick(e){
		this.setState({viewingStore:!this.state.viewingStore});
	}
	render(){
		return (
			<React.Fragment>
				<Menu viewingStore={this.state.viewingStore} onMenuItemClick={this.handleMenuItemClick}/>
				<div id="main-container">
					{this.state.viewingStore?<Store filters={filters} guitars={guitars}/>:<ShoppingCart guitars={guitars}/>}
				</div>
			</React.Fragment>
		);
	}
}