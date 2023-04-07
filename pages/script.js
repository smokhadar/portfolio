var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
    var element = event.target;
    var state = element.getAttribute("data-state");

    if (element.matches("img")){
        if (state === "cute") {
            element.dataset.state = "scary";
            element.setAttribute("src", element.dataset.scary);
    } else {
            element.dataset.state = "cute";
            element.setAttribute("src", element.dataset.cute);
    }
    }
});