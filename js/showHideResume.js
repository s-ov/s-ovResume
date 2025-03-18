function showHideResume() {
    const table = document.getElementById("resume");
    const button = document.getElementById("toggle-button");

    if (table.style.display === "none") {
        table.style.display = "table"; 
        button.textContent = "Hide Resume";
    } else {
        table.style.display = "none"; 
        button.textContent = "Show Resume";
    }
}
