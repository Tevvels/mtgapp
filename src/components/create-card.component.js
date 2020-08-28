import React, {Component} from 'react';
import axios from 'axios';
export default class CreateUsers extends Component{
	constructor(props){

		super(props);
		this.onAddCardName = this.onAddCardName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			cardName: '',
			cardCost: '',
			cardType: '',
			cardAttribute: '',
			cardDesc: ''
		}
	}

	componentDidMount(){
		axios.get('http://localhost:5000/card/')
		.then(response =>{
			if(response.data.length > 0){
				this.setState({
					card:response.data.map(card => card.cardName),
					cardName: response.data[0].cardName
				})
			}
		})
	}
	onAddCardName(e){
		this.setState({
			cardName: e.target.value
		});
	}

	onAddCardCost(e){
		this.setState({
			cardCost: e.target.value
		});

	}

	onAddCardType(e){
		this.setState({
			cardType: e.target.value
		});
	}
	
	onAddCardAttribute(e){
		this.setState({
			cardAttribute: e.target.value
		});
	}
	
	onAddCardDesc(e){
		this.setState({
			cardDesc: e.target.value
		});
	}

	onSubmit(e){
		e.preventDefault();

		const card = {
			cardName: this.state.cardName,
			cardCost: this.state.cardCost,
			cardType: this.state.cardType,
			cardAttribute: this.state.cardAttribute,
			cardDesc: this.state.cardDesc
		}
		console.log(card);
		axios.post("http://localhost:5000/card/add",card)
		.then(res => console.log(res.data));

		window.location = '/';
	}

	render(){
		return(

			<div>adding something here</div>

		 	)
		}
}