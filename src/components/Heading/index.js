import './Heading.css';

class Heading {
	render() {
		const h1 = document.createElement('h1');
		h1.innerHTML = 'Webpack is awesome';
		h1.classList.add('heading');
		document.body.appendChild(h1);
	}
}

export default Heading;
