import React, {Component} from 'react';
import axios from 'axios';


const Card = props =>(

	<tr>
		<td>{props.card.cardName}</td>
		<td>{props.card.cardCost}</td>
		<td>{props.card.cardType}</td>
		<td>{props.card.cardSet}</td>
		<td>{props.card.cardDesc}</td>
	</tr>

	)
 

export default class CardList extends Component{
	constructor(props) {
		super(props);

		this.deleteCard = this.deleteCard.bind(this);
		this.state = {cards:[]};

	}
	componentDidMount(){
		axios.get('http://localhost:5000/cards/')
			.then(res => console.log(res.data))
			.catch((error)=> {
				console.log(error);
			})
	}

	deleteCard(id){
		axios.delete('http://localhost:5000/cards/' + id)
			.then(res => console.log(res.data));

		this.setState({
			Card: this.state.cards.filter( el => el._id !== id)
		})
	}

	CardList(){
		return this.state.cards.map( currentCard => {
			return <Card card={currentCard} deleteCard={this.deleteCard} key={currentCard._id}/>
		})
	}

	render(){
		return(
			<div>
				{this.CardList()}
			</div>

			)
	}
}