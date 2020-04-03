import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
	return (
		<button
			className={` bg-${props.bgColor} block mx-auto md:inline-block md:mx-8 text-white w-56 py-3 text-3xl rounded-lg shadow-lg my-8 font-bold hover:opacity-75 transition`}>
			{props.text}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	bgColor: PropTypes.string.isRequired,
};

export default Button;
