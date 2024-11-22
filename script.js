function openModal(imgElement) {
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imgElement.src; // Set the image source
}

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800, // Duration of animations in milliseconds
    once: false, // Animation should happen every time you scroll down
});