const jsCounter = () => {
  const counters = document.getElementsByClassName('js-counter');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < counters.length; i++) {
    const counter = counters[i];
    const countDownDate = new Date(counter.dataset.date).getTime();

    // eslint-disable-next-line func-names
    const x = setInterval(function() {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      counter.innerHTML = `<span class="c-counter__time">${days}</span>gün <span class="c-counter__time">${hours}</span>saat <span class="c-counter__time">${minutes}</span>dakika <span class="c-counter__time">${seconds}</span>saniye`;

      if (distance < 0) {
        clearInterval(x);
        counter.parentElement.style.display = 'none';
      }
    }, 1000);
  }
};

jsCounter();
