function toggleMenu() {
    const nav = document.getElementById("navLinks");
    if (nav.style.right === "0px") {
        nav.style.right = "-200px";
    } else {
        nav.style.right = "0px";
    }
}
