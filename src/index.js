import * as shape from './shapes.js';
import itrator from './iterator';
import proxy from './proxy';
import './style.css';
import pic1 from './asset/shuffle-01.jpg';
import pic2 from './asset/shuffle-02.jpg';
import pic3 from './asset/shuffle-03.jpg';
import pic4 from './asset/shuffle-04.jpg';
import pic5 from './asset/shuffle-05.jpg';
import pic6 from './asset/shuffle-06.jpg';
import pic7 from './asset/shuffle-07.jpg';
import pic8 from './asset/shuffle-08.jpg';


const pics = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8];

let element =document.createElement('h1');

element.innerHTML = 'Please check console to see the result';

document.body.appendChild(element);

for(var i=0 ; i<8; i++){
let div =document.createElement('div');
let img =document.createElement('img');
img.src = pics[i];
div.appendChild(img);
document.body.appendChild(div);
}

console.log('===================== Shape Class =======================');



let r = new shape.Rectangle(10,5);
r.toString();

let s = new shape.Square(10);
s.toString();

let c = new shape.Circle(10);
c.toString();

itrator();
proxy();