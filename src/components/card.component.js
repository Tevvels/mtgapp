import React, {Component} from 'react';
import axios from 'axios';
import image from '../image/plains.jpg';


const images = {
	plains: 'plains.jpg',
	silver_myr: 'silver_myr.jpg'
}




const Card = props => (

	<tr className="card__data">
		<td className= "card card__data--name">{props.card.cardName}</td>
		<td className= "card card__data--cost">{props.card.cardCost}</td>
		<td className= "card card__data--type">{props.card.cardType}</td>
		<td className= "card card__data--set">{props.card.cardSet}</td>
		<td className="card card__data--desc">{props.card.cardDesc}</td>
	</tr>

	)// a functional react component
 

export default class CardList extends Component{
	constructor(props) {
		super(props);

		this.deleteCard = this.deleteCard.bind(this);
		this.state = {cards:[]};

	}
	componentDidMount(){
		axios.get('http://localhost:5000/card/')
			.then(res =>this.setState({cards:res.data}))
			.catch((error)=> {
				console.log(error);
			})
	}

	deleteCard(id){
		axios.delete('http://localhost:5000/card/' + id)
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

			
			<div className = "card card__main"> 
			<table className ="card__main">

				<img src={image} alt={image} className="card__image" height={300} width={230}/>
				<tr className="card__data--tr">{this.CardList()}</tr>
				<tr className = "card__actions">actions</tr>
			</table>	
			</div>

			)
	}
}