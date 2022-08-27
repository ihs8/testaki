import React from 'react'
import './progress.css'
function Progress(props) {
  
	const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${props.done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{props.done}%
			</div>
		</div>
	)
}

export default Progress