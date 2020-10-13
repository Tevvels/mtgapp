import React, {Component, useState} from 'react';
import axios from 'axios';

const urlLocation = "http://localhost:5000/";


let num = 0;

const CardName = props =>(
		props.card.cardName

	)



const Card = props => (
	props.card.cardImage
	)// a functional react component
 



export default class CardImage extends Component{
	constructor(props) {
		super(props);
		this.imageButton = this.imageButton.bind(this);
		this.deleteCard = this.deleteCard.bind(this);
		this.state = {cards:[],images:"../image/back of card.jpg"};


	}
	componentDidMount(){
		axios.get(urlLocation + 'card/')
			.then(res =>this.setState({cards:res.data}))
			.catch((error)=> {
				console.log(error);

			});

		
	}

	deleteCard(id){
		axios.delete(urlLocation +'card/' + id)
			.then(res => console.log(res.data));

		this.setState({
			Card: this.state.cards.filter( el => el._id !== id)
		})
	}



	CardName(){
		return this.state.cards.map(currentCardName => {
			return<button className="list__li" onClick={this.imageButton}><CardName card={currentCardName} key={currentCardName._id} /></button>
		})
	}



	imageButton(event,img){
		for (var i = 0; i < this.state.cards.length; i++) {
			if(this.state.cards[i].cardName == event.target.innerHTML){
				this.setState({ images: this.state.cards[i].cardImage})
			}
		}
	}


	render(){


		return(

			<div className = "card card__main main"> 
				<table className ="card__main main__test">
					<select className="card__data select">
					
					<option className="deck"> Blue/White Control </option>
				</select>

				<div className ="cardName list">
					<td className= "card list__li card__data--name">{}</td>
				</div>




					<tr className="list">			
							<div className ="cardName list">
							<td className= "card list__li card__data--name" onClick={this.CardEvent}>{this.CardName()}</td>
						</div>
 					</tr>
					<imageButton/>
					<tr className="card__data--tr img"><img className ="images" src={this.state.images}/></tr>
	
			</table>	
			</div>

			)
	}
}

