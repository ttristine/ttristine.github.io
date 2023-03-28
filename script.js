for (let i = 0; i < 50; i++) {
	const raindrop = document.createElement('div');
	raindrop.className = 'raindrop';
	raindrop.style.left = Math.random() * window.innerWidth + 'px';
	raindrop.style.animationDelay = Math.random() + 's';
	document.body.appendChild(raindrop);
}
