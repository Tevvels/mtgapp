import React, {Component} from 'react';
import axios from 'axios';




class listOfCards extends Component{
	render(){
		return <div className= "list"> hello </div>
	}
}



const Card = props => (
	<div className="main__test">
		

		<select className="card__data select">
			<option className="deck"> Deck Name </option>

		
		</select>
		<tr className ="list">
			<td className= "card list__li card__data--name">{props.card.cardName}</td>
		</tr>

		<div className="img">
			<img className ="images"src={props.card.cardImage}/>
		</div>
		

	</div>
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

			<div className = "card card__main main"> 
			<table className ="card__main main__test">

					<tr className="card__data--tr main__test">{this.CardList()[2]}</tr>
	

					<listOfCards />
				<tr className = "card__actions option">actions</tr>
			</table>	
			</div>

			)
	}
}