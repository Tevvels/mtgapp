import React, {Component} from 'react';





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
			<div>
			<Greeting isLoggedIn = {false}/>
			<ActionLink/>
			<Clock />
			<Welcome name="chris"/>
			<Welcome name="benjamin"/>
			<Welcome name="watkins"/>
			</div>
		)
	}
}
