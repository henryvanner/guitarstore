import React from 'react';
import CartItem from './CartItem';

function Cart (props){
	const total = props.items.reduce((accumulator,item)=>accumulator+(item.price*item.quantity),0);
	return (
		<div className="cart">
			<div className="container-fluid">
				<div className="col">
					<table className="table cart-list">
						<thead>
							<tr>
								<th>Imagen</th>
								<th>Producto</th>
								<th>Cantidad</th>
								<th>Precio unitario</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{props.items.map((item,index)=><CartItem key={index} {...item} onRemoveFromCart={props.onRemoveFromCart} onChangeQuantity={props.onChangeQuantity} />)}
						</tbody>
						<tfoot>
							<tr>
								<th colSpan="4">Total</th>
								<th>€ {total}</th>
							</tr>
						</tfoot>
					</table>
					<button className="btn btn-primary" onClick={props.onContinueShopping}>Seguir comprando</button>
				</div>
			</div>
		</div>
	);
}

export default Cart;