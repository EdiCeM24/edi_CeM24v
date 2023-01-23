let popupEl = document.getElementById("popup");

function openPopup() {
    popupEl.classList.add("open-popup");
}

function closePopup() {
    //popupEl.classList.remove("open-popup");
    window.location.href = "../index.html";
}


