document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});


const clickNo = document.getElementById('clickNo');
clickNo.addEventListener('mouseover', moveHover)

function moveHover() {
    const first = Math.floor(Math.random() * 350) + 1;
    const second = Math.floor(Math.random() * 350) + 1;

    clickNo.style.left = first + "px";
    clickNo.style.top = second + "px";
}

popup = document.getElementById('popup');
popupImpossible = document.getElementById('popup-impossible');

function openPopup() {
    const audioGay = new Audio('../audio/gay-meme.mp3');
    audioGay.play();
    popup.classList.add('open-popup');
    popup.style.display = "block";
}

function openPopupImpossible() {
    popupImpossible.classList.add('open-popup');
    popupImpossible.style.display = "block";
}

function closePopup() {
    popup.classList.remove('open-popup');
    popup.style.display = "none";
}

function closePopupImpossible() {
    popupImpossible.classList.remove('open-popup');
    popupImpossible.style.display = "none";
}