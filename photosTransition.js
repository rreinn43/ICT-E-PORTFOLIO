document.querySelectorAll('.folderMedia').forEach(img => {
    img.addEventListener("mouseenter", () => {
        let transformOriginValue = window.getComputedStyle(img).getPropertyValue("transform-origin");
        img.style.transformOrigin = transformOriginValue;
        img.style.transform = "scale(2)"; 
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});
