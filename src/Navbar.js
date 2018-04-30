import React from 'react';

function Navbar (props){
	return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<a className="navbar-brand" href="#">
			<img src="/assets/pick.png" width="30" height="30" className="d-inline-block align-top" />
			Rock guitars shop
		</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
				<li className={"nav-item "+(props.store?"active":"")}>
					<a className="nav-link" href="#"><img src="/assets/ic_store_white_24px.svg" />Store</a>
				</li>
				<li className={"nav-item"+(!props.store?"active":"")}>
					<a className="nav-link" href="#"><img src="/assets/ic_shopping_cart_white_24px.svg" />Cart</a>
				</li>
			</ul>
		</div>
	</nav>);
}

export default Navbar;