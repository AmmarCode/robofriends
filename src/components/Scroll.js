import React from 'react'

const Scroll = (props) => {
	return (
		<div style={{overflow: 'auto', border: 'solid black',  borderWidth:'2px', height:'700px'}}>
			{props.children}
		</div>
	)
}

export default Scroll
