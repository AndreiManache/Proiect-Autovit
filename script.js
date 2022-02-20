import mergeImages from 'merge-images';


var state = [];
const image1 = document.getElementById("img").src;
const image2 = document.getElementById("bannerImg").src;


function setLocal(){
    const inputValue = document.getElementById("uploadPhoto").value;
    state.push(inputValue);
    populateStorage();
    return inputValue;
    }

    mergeImages([ image1, image2])
    .then(b64 => document.querySelector('img').src = b64);

function populateStorage() {
    localStorage.setItem('image', JSON.stringify(state));
}

function retrieveStorage() {
    state = JSON.parse(localStorage.getItem('image'));
    return state;
}
