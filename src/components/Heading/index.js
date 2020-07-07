import $ from 'jquery';

import './Heading.css';

class Heading {
	render() {
		const h1 = $('<h1>');
		h1.text('Webpack is awesome with');
		h1.addClass('heading');
		$('body').append(h1);
	}
}

export default Heading;
