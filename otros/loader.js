// Mostrar loader automáticamente al cargar la página
window.addEventListener("load", () => {
    const loader = document.getElementById("customLoader");
    if (loader) {
        loader.style.display = "flex";

        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 300);
        }, 1200); // tiempo visible del loader (1.2s)
    }
});