import React from 'react';
import {connect} from 'react-redux';
import {
	fetchServerDataIfNeeded
} from '../actions';
import Filter from '../components/Filter';
import VisibleGuitarGrid from '../containers/VisibleGuitarGrid';

function LoadingImg (props){
	return (
		<div>
			<div className="loading">
				<img src="/assets/bass1.svg"/>
				<img src="/assets/bass2.svg"/>
				<img src="/assets/bass3.svg"/>
				<img src="/assets/bass4.svg"/>
			</div>
		</div>
	);
}

function ErrorMessage (props){
	return (
		<div>
			<p className="text-danger">{props.message}</p>
			<button className="btn btn-primary" onClick={props.onTryAgain}>Intentar otra vez</button>
		</div>
	);
}

class Store extends React.Component{
	constructor(props){
		super(props);
		this.handleTryAgain = this.handleTryAgain.bind(this);
	}
	handleTryAgain (e){
		const {dispatch} = this.props;
		dispatch(fetchServerDataIfNeeded());
	}
	componentDidMount (){
		const {dispatch} = this.props;
		dispatch(fetchServerDataIfNeeded());
	}
	render(){
		const {fetching,guitars,error,errorMessage} = this.props;
		return (
			<div className="shop-container">
				<Filter filters={this.props.filters}/>
				{fetching ? <LoadingImg />: (error ? <ErrorMessage message={errorMessage} onTryAgain={this.handleTryAgain}/> :<VisibleGuitarGrid guitars={guitars}/> )}
			</div>
		);
	}	
}

function mapStateToProps (state){
	const {guitars,fetching,error,errorMessage} = state.serverData;
	return {
		guitars,
		fetching,
		error,
		errorMessage
	}
}

export default connect (mapStateToProps)(Store);