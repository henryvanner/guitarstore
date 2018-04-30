import React from 'react';

function Card (props){
	const imgPath = "/guitars/".concat(props.id,".jpg");
	return (<div className="card">
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<div className="inner">
						<div className="preview"><img src={imgPath}/></div>
						<div className="info"><span>€ {props.price}</span><button className="btn btn-outline-primary" onClick={props.onClick}>Let's rock!</button></div>
					</div>
				</div>
			</div>);
}

function GuitarGrid (props){
	return (<div className="store">
				{props.guitars.map((guitar,index)=><Card key={index} {...guitar}/>)}
			</div>);
}

export default GuitarGrid;