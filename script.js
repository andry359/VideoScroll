const frameNumber = 0, // начать видео с 0 кадра
	// меньшее число = более быстрое воспроизведение
	playbackConst = 500,
	// получить высоту страницы из продолжительности видео
	setHeight = document.getElementById('set-height'),
	// выбрать элемент видео
	video = document.getElementById('video'),
	// полоса прогресса
	progress = document.querySelector('.progress');

// динамически устанавливать высоту страницы в соответствии с длиной видео
video.addEventListener('loadedmetadata', function () {
	setHeight.style.height = Math.floor(video.duration) * playbackConst + 'px';
});

console.log(window.pageYOffset);

// Используем requestAnimationFrame для плавного воспроизведения
function scrollPlay() {
	const frameNumber = window.pageYOffset / playbackConst;
	// console.log(`Это frameNumber и video.currentTime соответсвенно - ${frameNumber}`);
	let per =
		(window.pageYOffset / (Math.floor(video.duration) * playbackConst)) * 100;
	// console.log(`Это per и progress.style.width соответсвенно- ${per}`);
	video.currentTime = frameNumber;

	progress.style.height = per + '%';
	window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);
