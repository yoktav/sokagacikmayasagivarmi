const jsCounter = () => {
  const article = document.querySelector('.js-counter');
  const countDownDate = new Date(article.dataset.date).getTime();

  // eslint-disable-next-line func-names
  const x = setInterval(function() {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(
      '.js-counter',
    ).innerHTML = `<span class="c-counter__time">${days}</span>gün <span class="c-counter__time">${hours}</span>saat <span class="c-counter__time">${minutes}</span>dakika <span class="c-counter__time">${seconds}</span>saniye`;

    if (distance < 0) {
      clearInterval(x);
      document.querySelector('.js-counter').style.display = 'none';
    }
  }, 1000);
};

jsCounter();
