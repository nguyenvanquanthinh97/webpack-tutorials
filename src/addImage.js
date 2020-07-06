import KyouSuiri from './kyou-suiri.jpg';

const addImage = () => {
	const img = document.createElement('img');
	img.alt = 'kyou-suiri.jpg';
	img.src = KyouSuiri;
	img.width = 300;
	document.body.appendChild(img);
};

export default addImage;
