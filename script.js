let items = [];

for (let i = 0; i < 21; i++) {
    items[i] = `./img/testimates/testimate${i + 1}.png`;
}

items.forEach((item, index) => {
    if (index === 0) {
        let gradient = document.createElement("div");
        gradient.classList.add('testimonial__gradient');

        let container = document.createElement("div");
        container.classList.add('testimonial__gradientContainer');

        document.querySelector(".testimonials__imgs").appendChild(container);
        document.querySelector(".testimonial__gradientContainer").appendChild(gradient);

        let img = document.createElement("div");
        img.style.backgroundImage = `url('${item}')`;
        img.classList.add('testimonials__img');

        document.querySelector(".testimonial__gradientContainer").appendChild(img);


    } else if (index > 1 && index < 17) {
        let img = document.createElement("div");
        img.style.backgroundImage = `url('${item}')`;
        img.classList.add('testimonials__img');
        img.classList.add('d-none');
        img.classList.add('d-sm-block');
        document.querySelector(".testimonials__imgs").appendChild(img)

    }

    else if (index === 20) {
        let gradient = document.createElement("div");
        gradient.classList.add('testimonial__gradient');

        let container = document.createElement("div");
        container.classList.add('testimonial__gradientContainer2');

        document.querySelector(".testimonials__imgs").appendChild(container);
        document.querySelector(".testimonial__gradientContainer2").appendChild(gradient);

        let img = document.createElement("div");
        img.style.backgroundImage = `url('${item}')`;
        img.classList.add('testimonials__img');

        document.querySelector(".testimonial__gradientContainer2").appendChild(img)

    }
    else {
        let img = document.createElement("div");
        img.style.backgroundImage = `url('${item}')`;
        img.classList.add('testimonials__img');

        document.querySelector(".testimonials__imgs").appendChild(img)

    }

});

const player = document.querySelector('.getNotified_video');
const video = player.querySelector('.video');
const play = player.querySelector('.video__play')
const progress = player.querySelector('.video__progress--filled');
const volume = player.querySelector('.video__volume--filled');
const HD = player.querySelector('.video__hd');
const expand = player.querySelector('.video__expand');

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? ' <i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
    play.innerHTML = icon;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.flexBasis = `${percent}%`;
}

function handleValue() {
    const percent = video.volume * 100;
    volume.style.width = `${percent}%`;
}

function handleFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
}
let isHD = false;

function handleHD() {
    const time = video.currentTime;

    if (!isHD) {
        video.querySelector('source').src = './video.mp4';
        video.load();
        video.currentTime = time;
        HD.style.color = '#00adef';
        isHD = true;
    } else {
        video.querySelector('source').src = './video-340.mp4';
        video.load();
        video.currentTime = time;
        HD.style.color = '#fff';
        isHD = false;
    }

}

video.addEventListener('click', togglePlay);
play.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
expand.addEventListener('click', handleFullscreen);
HD.addEventListener('click', handleHD);

console.log(video.querySelector('source').src)