let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-inner img');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slides.forEach(slide => slide.style.display = 'none');
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// 초기 슬라이드 설정
showSlide(currentSlide);

function toggleHeart(element) {
  let icon = element.querySelector('i');
  if (icon.classList.contains('bx-heart')) {
      icon.classList.remove('bx-heart');
      icon.classList.add('bxs-heart');
      icon.style.color = 'red'; // 클릭 시 빨간색으로 변경
  } else {
      icon.classList.remove('bxs-heart');
      icon.classList.add('bx-heart');
      icon.style.color = 'black'; // 기본 상태는 검정색
  }
}
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.toggle input[type="checkbox"]');

    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            document.querySelector('.header').classList.add('dark-mode');
            document.querySelector('.sidebar').classList.add('dark-mode');
            document.querySelector('.follow-suggestions').classList.add('dark-mode');
            document.querySelectorAll('.post-container').forEach(function(post) {
                post.classList.add('dark-mode');
            });
            document.querySelectorAll('.profile-inner').forEach(function(profile) {
                profile.classList.add('dark-mode');
            });
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelector('.header').classList.remove('dark-mode');
            document.querySelector('.sidebar').classList.remove('dark-mode');
            document.querySelector('.follow-suggestions').classList.remove('dark-mode');
            document.querySelectorAll('.post-container').forEach(function(post) {
                post.classList.remove('dark-mode');
            });
            document.querySelectorAll('.profile-inner').forEach(function(profile) {
                profile.classList.remove('dark-mode');
            });
        }
    });
});
