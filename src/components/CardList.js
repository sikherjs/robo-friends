import React from 'react';
import Card from './Card'

const CardList = ({ robots }) =>{
		// whenever you do a loop in React you have to give it a unique key, key prop should have something that doesnt change//  
	return(
	<div>
	{
		robots.map((user,i)=> {
			return (
				
	     		<Card 
	     		key={i} 
	     		id = {robots[i].id }
	     		name = {robots[i].name}
	     	    email = {robots[i].email} 
	     	    />
	     	);
		})
	}
    </div>

	);
}
export default CardList;