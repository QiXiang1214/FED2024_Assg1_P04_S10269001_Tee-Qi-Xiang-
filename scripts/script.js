// Create overlay element
const overlay = document.createElement("div");
overlay.classList.add("image-overlay");
overlay.style.cssText = `
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

overlay.innerHTML = `
    <img src="" alt="Expanded Image" style="max-width: 90%; max-height: 90%;">
    <button class="close-button" style="position: absolute; top: 20px; right: 20px; background: black; color: white; border: none; padding: 10px; cursor: pointer;">Close</button>
`;

document.body.appendChild(overlay);

// Select all the images inside the "memory-image" and "brand-logos" divs
const galleryItems = document.querySelectorAll(".memory-image img");
const overlayImage = overlay.querySelector("img");
const closeButton = overlay.querySelector(".close-button");

// Add click event listeners to each image
galleryItems.forEach(item => {
    item.addEventListener("click", function () {
        overlay.style.display = "flex"; // Show overlay
        overlayImage.src = this.src;   // Set clicked image as overlay image
    });
});

// Add click event listener to the close button
closeButton.addEventListener("click", function () {
    overlay.style.display = "none";  // Hide overlay
});

// Close the overlay when clicking outside the image
overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
});
