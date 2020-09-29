import React, {Component} from 'react';

const numbers =[1,2,3,4,5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);




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
	render(){
		return(

		<div className = "main">
			<div className="main main__test">
			<div className ="select">
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
				<div className="img">
					<img className= "images" src="../image/plains.jpg" />
				</div>


			</div>
		</div>



		)
	}
}
