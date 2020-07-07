import './Heading.css';

class Heading {
	render() {
		const pageName = arguments[0];
		const h1 = document.createElement('h1');
		h1.innerHTML = `Webpack is awesome with`;
		h1.classList.add('heading');
		document.body.appendChild(h1);
	}
}

export default Heading;
