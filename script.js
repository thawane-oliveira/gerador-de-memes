const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const inputImg = document.querySelector('#meme-insert');
const img = document.querySelector('#meme-image');
// const containerImg = document.querySelector('#meme-image-container');
const borderContainer = document.querySelector('.meme-image-container');
const fire = document.querySelector('#fire');
const water = document.querySelector('#water');
const earth = document.querySelector('#earth');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

function previewText() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', previewText);

//

function previewImg() {
  const selecImg = inputImg.files[0];
  img.src = URL.createObjectURL(selecImg);
}

inputImg.addEventListener('change', previewImg);

//
function removeClass() {
  if (borderContainer.classList.contains('meme-image-container')) {
    borderContainer.classList.remove('meme-image-container');
  }
}

function turnFire() {
  removeClass();
  borderContainer.style.border = '3px dashed red';
}

function turnWater() {
  removeClass();
  borderContainer.style.border = '5px double blue';
}

function turnEarth() {
  removeClass();
  borderContainer.style.border = '6px groove green';
}

fire.addEventListener('click', turnFire);
water.addEventListener('click', turnWater);
earth.addEventListener('click', turnEarth);

//

function memePreview(meme) {
  const selectedMeme = meme.target.src;
  img.src = selectedMeme;
}

meme1.addEventListener('click', memePreview);
meme2.addEventListener('click', memePreview);
meme3.addEventListener('click', memePreview);
meme4.addEventListener('click', memePreview);
