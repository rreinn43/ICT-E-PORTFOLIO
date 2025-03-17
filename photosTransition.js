document.querySelectorAll('.folderMedia').forEach(img => {
    img.addEventListener("mouseenter", () => {
        let transformOriginValue = window.getComputedStyle(img).getPropertyValue("transform-origin");
        img.style.transformOrigin = transformOriginValue;
        img.style.transform = "scale(2)"; // Enlarges from correct origin
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)"; // Returns to normal size
    });
});
