import Heading from './components/Heading';
import HelloWorldButton from './components/HelloWorldButton';
import addImage from './addImage';

const heading = new Heading();
heading.render();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
addImage();

if(process.env.NODE_ENV === 'production') {
  console.log('Production')
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development')
}
