import React, {Component} from 'react';
import axios from 'axios';
export default class CreateUsers extends Component{
	constructor(props){

		super(props);
		this.onAddCardImage = this.onAddCardImage.bind(this);
		this.onAddCardName = this.onAddCardName.bind(this);
		this.onAddCardCost = this.onAddCardCost.bind(this);
		this.onAddCardAttribute = this.onAddCardAttribute.bind(this);
		this.onAddCardType = this.onAddCardType.bind(this);
		this.onAddCardDesc = this.onAddCardDesc.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			cardImage: '',
			cardName: '',
			cardCost: '',
			cardType: '',
			cardAttribute: '',
			cardDesc: ''
		}
	}

	// componentDidMount(){
	// 	axios.get('http://localhost:5000/card/')
	// 	.then(response =>{
	// 		if(response.data.length > 0){
	// 			this.setState({
	// 				card:response.data.map(card => card.cardName),
	// 				cardName: response.data[0].cardName
	// 			})
	// 		}
	// 	})
	// }
	onAddCardName(e){
		this.setState({
			cardName: e.target.value
		});
	};
	onAddCardImage(e){
		this.setState({
			cardImage: e.target.value
		});
	};
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
			 <div className = "create_card">
			 	<form className = "create_card--form" onSubmit={this.onSubmit}>
			 		<h2 className = "create_card--title">
			 			Card Input
			 		</h2>
			 		<label className ="create_card--name">
			 			Name:
			 		</label>
			 		<input className = "create_card--name create_card--input" type="text" value={this.state.cardName} onChange={this.onAddCardName}/>


			 		<label className ="create_card--cost">
			 			Cost:
			 		</label>
			 		<input className = "create_card--cost create_card--input" type="text" value={this.state.cardCost} onChange={this.onAddCardCost}/>

			 		<label className ="create_card--type">
			 			Type:
			 		</label>
			 		<input className = "create_card--type create_card--input" type="text" value={this.state.cardType} onChange={this.onAddCardType}/>
					
					<label className ="create_card--attribute">
			 			desc:
			 		</label>
			 		<input className = "create_card--desc create_card--input" type="textArea" value={this.state.cardDesc} onChange={this.onAddCardDesc}/>




			 		<input className = "create_card--submit" type="submit" Submit />

			 	</form>
			 </div>
		 	)
		}
}