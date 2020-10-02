import React, {Component} from 'react';
import axios from 'axios';

const CardName = props =>(
	<div className ="cardName list">
			<td className= "card list__li card__data--name">{props.card.cardName}</td>
	</div>

	)



const Card = props => (

		<div className="img">
			<img className ="images"src={props.card.cardImage}/>
		</div>		
	)// a functional react component
 

export default class CardImage extends Component{
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

	CardName(){
		return this.state.cards.map(currentCardName => {
			return <CardName card={currentCardName} />
		})
	}
	CardImage(){
		return this.state.cards.map( currentCard => {
			return <Card card={currentCard} deleteCard={this.deleteCard} key={currentCard._id}/>
		})
	}

	render(){
		return(

			<div className = "card card__main main"> 
			<table className ="card__main main__test">
				<select className="card__data select">
					<option className="deck"> Deck Name </option>
				</select>

					<tr className="list"> {this.CardName()} </tr>
					<tr className="card__data--tr img">{this.CardImage()}</tr>
	
			</table>	
			</div>

			)
	}
}