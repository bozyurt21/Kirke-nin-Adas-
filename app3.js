function toggleText(button) {
    const text = button.parentElement.nextElementSibling;
    if (text.style.display === "none") {
        text.style.display = "block";
        button.innerText = "-";
    } else {
        text.style.display = "none";
        button.innerText = "+";
    }
}

