document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});


const clickNo = document.getElementById('clickNo');
clickNo.addEventListener('mouseover', moveHover)

function moveHover() {
    const first = Math.floor(Math.random() * 500) + 1;
    const second = Math.floor(Math.random() * 500) + 1;

    clickNo.style.left = first + "px";
    clickNo.style.top = second + "px";
}

popup = document.getElementById('popup');

function openPopup() {
    popup.classList.add('open-popup');
}

function closePopup() {
    popup.classList.remove('open-popup');
}