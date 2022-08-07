import React from 'react';

// Scroll can use children as a way to render its children - By that we mean every props object has children//
//Using porps.children we can create components that wrap other components//

const Scroll = (props) =>{
	return (
		<div style={{overflowY : 'scroll' , border: '5px solid black', height: '800px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;

