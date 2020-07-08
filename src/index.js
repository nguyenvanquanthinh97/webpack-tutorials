import Heading from './components/Heading';
import HelloWorldButton from './components/HelloWorldButton';
import addImage from './addImage';
import './index.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const heading = new Heading();
heading.render();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
addImage();

if (process.env.NODE_ENV === 'production') {
	console.log('Production');
} else if (process.env.NODE_ENV === 'development') {
	console.log('Development');
}
