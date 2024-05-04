window.onload = function () {
	const mapContainer = document.getElementById("map-container");
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;

	// Adjust image dimensions based on screen aspect ratio
	const imageWidth = 1920;
	const imageHeight = 1080;
	const aspectRatio = imageWidth / imageHeight;
	const screenAspectRatio = screenWidth / screenHeight;

	let backgroundSize;
	if (screenAspectRatio > aspectRatio) {
		backgroundSize = "auto 100%";
	} else {
		backgroundSize = "100% auto";
	}

	mapContainer.style.backgroundImage = 'url("img/world-map.png")';
	mapContainer.style.backgroundSize = backgroundSize;

	// Touch event handlers for mobile devices
	let touchStartX = 0;
	let touchStartY = 0;
	let touchEndX = 0;
	let touchEndY = 0;

	mapContainer.addEventListener("touchstart", function (event) {
		touchStartX = event.touches[0].clientX;
		touchStartY = event.touches[0].clientY;
	});

	mapContainer.addEventListener("touchmove", function (event) {
		event.preventDefault();
		touchEndX = event.touches[0].clientX;
		touchEndY = event.touches[0].clientY;

		const deltaX = touchEndX - touchStartX;
		const deltaY = touchEndY - touchStartY;

		const currentBackgroundPositionX =
			parseInt(mapContainer.style.backgroundPositionX) || 0;
		const currentBackgroundPositionY =
			parseInt(mapContainer.style.backgroundPositionY) || 0;

		mapContainer.style.backgroundPositionX = `${
			currentBackgroundPositionX - deltaX
		}px`;
		mapContainer.style.backgroundPositionY = `${
			currentBackgroundPositionY - deltaY
		}px`;

		touchStartX = touchEndX;
		touchStartY = touchEndY;
	});
};
