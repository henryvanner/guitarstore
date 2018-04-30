import React from 'react';

function CartItem (props){
	const imgPath = "/guitars/".concat(props.id,".jpg");
	const total = props.quantity * props.price;
	return (
		<tr>
			<td><img src={imgPath}/></td>
			<td>{props.name}</td>
			<td data-id={props.id}><input type="number" value={props.quantity} onChange={props.onChangeQuantity} min="1" className="form-control"/><img src="/assets/ic_delete_black_24px.svg" className="delete-action" onClick={props.onRemoveFromCart}/><span className="text-danger">Eliminar artículo</span></td>
			<td>€ {props.price}</td>
			<td>€ {total}</td>
		</tr>
	);
}

export default CartItem;