document.getElementById("toggle-details").addEventListener("click", function () {
    const details = document.getElementById("full-details");
    if (details.style.display === "none") {
        details.style.display = "block";
        this.textContent = "Hide Full Agreement";
    } else {
        details.style.display = "none";
        this.textContent = "Toggle Full Agreement";
    }
});
