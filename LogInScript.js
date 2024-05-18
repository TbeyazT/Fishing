var modal = document.getElementById("loginModal");

var btn = document.getElementById("loginButton");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    setTimeout(function() {
        modal.classList.add("show");
        document.querySelector(".modal-content").classList.add("show");
    }, 10);
}

span.onclick = function() {
    modal.classList.remove("show");
    document.querySelector(".modal-content").classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
    }, 300);
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show");
        document.querySelector(".modal-content").classList.remove("show");
        setTimeout(function() {
            modal.style.display = "none";
        }, 300);
    }
}