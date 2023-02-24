document.querySelectorAll(".text-input").forEach((Element) =>{
    Element.addEventListener("blur", (event) => {
        if (event.target != "") {
            event.target.nextElementSibling.classList.add("filled");
        } else {
            event.target.nextElementSibling.classList.remove("filled")
        }
    });
});