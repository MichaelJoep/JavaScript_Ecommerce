let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
let close = document.getElementById('close');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')

    })
}

if(bar) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

//Single Product Image
let MainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("small_img");

smallImg[0].onclick = () => {
    MainImg.src = smallImg[0].src;
}

smallImg[1].onclick = () => {
    MainImg.src = smallImg[1].src;
}

smallImg[2].onclick = () => {
    MainImg.src = smallImg[2].src;
}

smallImg[3].onclick = () => {
    MainImg.src = smallImg[3].src;
}

