import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import React,{Component} from 'react';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';
//STATE - An object that describes your application , in our example it forms a connection between the SearchBox and the robots
//PROPS - They are simply things that come out of state//



class App extends Component {  // this refers to the App//
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	} 

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>response.json())
            .then(users=>this.setState({robots: users}));
		
	}
	
	onSearchChange = (event) => {	// constructor and render are prebuilt in react , so any time you make a method make sure to use arrow function//
		this.setState({searchfield: event.target.value})
	}
	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter((robot) =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		if(robots.length === 0){
			return <h1>Loading</h1>
		}else {
			return(
				<div className = 'tc'>
					<h1 className = 'f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots = {filteredRobots}/>
						</ErrorBoundary>

					</Scroll>
				</div>
            );		
		}	
	
	}

}

export default App;