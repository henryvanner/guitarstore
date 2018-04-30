import React from 'react';
import Filter from './Filter';
import VisibleGuitarGrid from '../containers/VisibleGuitarGrid';

function Store (props){
	return (<div className="shop-container">
				<Filter filters={props.filters}/>
				<VisibleGuitarGrid guitars={props.guitars}/>
			</div>);
}

export default Store;