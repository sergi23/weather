
import React from 'react'
import PropTypes from 'prop-types'
// animate
import { Animated } from 'react-animated-css'

const Icon = ({ icon, text }) => (
	
	<div className="icon">
		<p>{text}</p>
		<Animated animationIn="pulse" animationOut="fadeOut" isVisible={true} style={{textAlign: 'center'}}>
			<img src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} alt={text} />
		</Animated>
	</div>
)

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default Icon
