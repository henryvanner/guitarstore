import React from 'react';
import CheckboxFilter from '../containers/CheckboxFilter';

function FilterSection(props){
	return (<section>
				<label>{props.title}</label>
				<section>
					{props.items.map((item,index)=><CheckboxFilter key={index} {...item} correlative={index} attribute={props.attribute}/>)}
				</section>
			</section>);
}
function Filter (props){
	return (<div className="filter">
				{props.filters.map((filter,index)=><FilterSection key={index} {...filter}/>)}
			</div>);
}

export default Filter;