export const offerAnimations = () => {
  const dots = document?.querySelectorAll(".animation-main-stuck__dot");
  const dots2 = document?.querySelectorAll(".animation-main-stuck__text");
  const dots3 = document?.querySelectorAll(".animation-main-message__text");

  let currentIndex = 0;
  let currentIndex2 = 0;
  let currentIndex3 = 0;

  const interval = 200; // 0.5 секунды = 500 миллисекунд
  const interval2 = 1000; // 0.5 секунды = 500 миллисекунд
  const interval3 = 1100; // 0.5 секунды = 500 миллисекунд

  function animationDotsAtStuck() {
    if (dots.length == 0) {
      return;
    } else {
      function activateDot(index) {
        dots.forEach((dot) => dot.classList.remove("active"));
        dots[index].classList.add("active");
      }

      function cycleDots() {
        activateDot(currentIndex);
        currentIndex = (currentIndex + 1) % dots.length;
        setTimeout(cycleDots, interval);
      }
      cycleDots();
    }
  }
  animationDotsAtStuck();

  function animationMessagesAtStuck() {
    if (dots2.length == 0) {
      return;
    } else {
      function activateDot2(index) {
        dots2.forEach((dot) => dot.classList.remove("active"));
        dots2[index].classList.add("active");
      }

      function cycleDots2() {
        activateDot2(currentIndex2);
        currentIndex2 = (currentIndex2 + 1) % dots2.length;
        setTimeout(cycleDots2, interval2);
      }
      cycleDots2();
    }
  }
  animationMessagesAtStuck();

  function animationMessagesAtMessage() {
    if (dots3.length == 0) {
      return;
    } else {
      function activateDot3(index) {
        dots3.forEach((dot) => dot.classList.remove("active"));
        dots3[index].classList.add("active");
      }

      function cycleDots3() {
        activateDot3(currentIndex3);
        currentIndex3 = (currentIndex3 + 1) % dots3.length;
        setTimeout(cycleDots3, interval3);
      }
      cycleDots3();
    }
  }
  animationMessagesAtMessage();
};
