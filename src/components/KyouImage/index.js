import KyouImg from './kyou-suiri.jpg';
import './KyouImage.scss';

class KyouSuiri {
  render() {
    const img = document.createElement('img');
    img.alt = 'kyou-suiri.jpg';
    img.src = KyouImg;
    img.classList.add('kyou-image');
    document.body.appendChild(img);
  }
}

export default KyouSuiri;
