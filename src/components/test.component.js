import React, {Component, useState} from 'react';
import axios from 'axios';
const numbers =[1,2,3,4,5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);





function Example(){

	const [count, setCount] = useState("../image/back of card.jpg");

	return(
		<div>
		<img src={count}></img>
				<button onClick={()=> setCount(count +1)}>
				click me
				</button>
			</div>

		)



}






export class Cards extends Component{
	constructor(props){
		super(props);
		this.state = {cards:{}};
	}
	componentDidMount(){
		axios.get('http://localhost:5000/card/')
		.then(res => this.setState({card:res.data}))
		.catch((error)=> {
			console.log(error);
		})
	}
	render(){
		return(
				<div> hello </div>

			)
	}
}




 class ButtonFunction extends React.Component {
	 showPicture(){
	 	alert ("something");

	 }
	 render(){
	 	return(
	 		<button onClick={this.showPicture}> button</button>
	 	);
	 }
}



function UserGreeting(props){
	return <h1>Welcome Back! </h1>
}
function GuestGreeting(props){
	return <h1>Please sign up.</h1>
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn){
		return <UserGreeting />;

	}
	return <GuestGreeting />;
}



function ActionLink(){
	function handleClick(e){
		e.preventDefault();
		console.log("clicked");

	}
	return(
		<a href="#" onClick={handleClick}>
		Click Me
		</a>
	);
}


function Welcome(props){
	return <h1> hello, {props.name}</h1>



} class Clock extends React.Component{
	constructor(props) {
		super(props)
		this.state = {date: new Date()};
	}


	componentDidMount(){
		this.timerID = setInterval(
		()=> this.tick(),
		 1000
		);


	}
	componentWillUnmount(){
		clearInterval(this.timerID);
	}
	tick(){
		this.setState({date: new Date()
		});
	}

	render(){
		return(
		<div>
			<h2> {this.state.date.toLocaleTimeString()}.</h2>
		</div>

		)
	}
}
const element = <Welcome name="Chris" />
export default class Test extends Component{

	constructor(props) {
		super(props);
		this.clicked = this.clicked.bind(this);
		this.state = {cards:{},buttonClicked: false};
	}

	clicked() {
		this.setState({buttonClicked:true})
	}





	render(){

		const buttonClicked = this.state.buttonClicked;
		let img;

		if(buttonClicked) {
			img = <img className= "images" src="../image/plains.jpg" />
		}else{
			img = <button onClick={this.clicked}> click me </button>
		}



		return(
		<div className = "main">
		<Cards />
		<Example />
			<div className="main main__test">
			<div className ="select">
			<Buttons buttonClicked={buttonClicked}/>
			{img}
				<ul className="select__ul" name="cards">
					<li className="option active" value="deck">option 1</li>
					<li className="option" value="deck">option 2</li>
					<li className="option" value="deck">option 3</li>
				</ul>
				</div>
				<div className="list">
					<ul className="list list__ul">
						<li className="list list__li">item</li>
						<li className="list list__li">item</li>
						<li className="list list__li">item</li>
				
					</ul>

				</div>
				<Buttons />
				<div className="img">
					<img className= "images" src="../image/plains.jpg" />
				</div>


			</div>
		</div>



		)
	}
}


function Buttons(props){
	const buttonClicked = props.buttonClicked;
	if(buttonClicked){
		return 	<img className= "images" src="../image/plains.jpg" />

	}
	return "workds"
}
