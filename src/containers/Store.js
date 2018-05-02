import React from 'react';
import {connect} from 'react-redux';
import {
	fetchServerDataIfNeeded
} from '../actions';
import Filter from '../components/Filter';
import VisibleGuitarGrid from '../containers/VisibleGuitarGrid';

function LoadingImg (props){
	return (
		<div className="loading">
			<img src="/assets/bass1.svg"/>
			<img src="/assets/bass2.svg"/>
			<img src="/assets/bass3.svg"/>
			<img src="/assets/bass4.svg"/>
		</div>
	);
}

class Store extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount (){
		const {dispatch} = this.props;
		dispatch(fetchServerDataIfNeeded());
	}
	render(){
		const {fetching,guitars} = this.props;
		return (
			<div className="shop-container">
				<Filter filters={this.props.filters}/>
				{fetching ? <div><LoadingImg /></div> :<VisibleGuitarGrid guitars={guitars}/>}
			</div>
		);
	}	
}

function mapStateToProps (state){
	const {guitars,fetching} = state.serverData;
	return {
		guitars,
		fetching
	}
}

export default connect (mapStateToProps)(Store);