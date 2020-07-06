import './HelloWorldButton.scss';

class HelloWorldButton {
	textClassName = 'hello-world-text';
	render() {
		const button = document.createElement('button');
		button.innerHTML = 'Click Me to say Hello';
		button.classList.add('hello-world-button');
		button.onclick = () => {
			const p = document.createElement('p');
			(p.innerHTML = 'Hello World'), p.classList.add(this.textClassName);
			document.body.appendChild(p);
		};
		document.body.appendChild(button);
	}
}

export default HelloWorldButton;
