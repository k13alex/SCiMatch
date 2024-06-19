export const quiz = () => {
  // delete
  const fake = document.querySelector(".fake");
  const fake2 = document.querySelector(".fake2");
  const fake3 = document.querySelector(".fake3");
  const fake4 = document.querySelector(".fake4");

  let currentQuestion = 1;
  const totalQuestions = 10;
  const totalQuestions2 = 3;

  const progressBar = document.querySelector(".quiz-progress__bar-percentage");

  function quizInit() {
    if (!progressBar) return;
    const progressNumber = document.querySelector(".step-id");

    if (document.querySelector(".quiz__steps_big")) {
      document.getElementById("nextBtn").addEventListener("click", () => {
        if (currentQuestion < totalQuestions) {
          document
            .getElementById(`step-${currentQuestion}`)
            .classList.remove("active");
          currentQuestion++;
          progressNumber.textContent = currentQuestion - 1;
          switch (currentQuestion) {
            case 1:
              progressBar.style.width = "00%";
              // delete
              fake.style.display = "flex";
              fake2.style.display = "none";

              break;
            case 2:
              progressBar.style.width = "10%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 3:
              progressBar.style.width = "20%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 4:
              progressBar.style.width = "30%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 5:
              progressBar.style.width = "40%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 6:
              progressBar.style.width = "50%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 7:
              progressBar.style.width = "60%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 8:
              progressBar.style.width = "70%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 9:
              progressBar.style.width = "80%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 10:
              progressBar.style.width = "90%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "flex";

              break;
            default:
          }

          document
            .getElementById(`step-${currentQuestion}`)
            .classList.add("active");
        }
      });

      document.getElementById("prevBtn").addEventListener("click", () => {
        if (currentQuestion > 1) {
          document
            .getElementById(`step-${currentQuestion}`)
            .classList.remove("active");
          currentQuestion--;
          progressNumber.textContent = currentQuestion - 1;

          switch (currentQuestion) {
            case 1:
              progressBar.style.width = "00%";
              // delete
              fake.style.display = "flex";
              fake2.style.display = "none";

              break;
            case 2:
              progressBar.style.width = "10%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 3:
              progressBar.style.width = "20%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 4:
              progressBar.style.width = "30%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 5:
              progressBar.style.width = "40%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 6:
              progressBar.style.width = "50%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 7:
              progressBar.style.width = "60%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 8:
              progressBar.style.width = "70%";
              // delete
              fake.style.display = "none";
              fake2.style.display = "none";

              break;
            case 9:
              progressBar.style.width = "80%";
              fake2.style.display = "none";

              break;
            case 10:
              progressBar.style.width = "90%";
              fake2.style.display = "flex";

              break;
            default:
          }
          document
            .getElementById(`step-${currentQuestion}`)
            .classList.add("active");
        }
      });
    }

    if (document.querySelector(".quiz__steps_small")) {
      document.getElementById("nextBtn2").addEventListener("click", () => {
        if (currentQuestion < totalQuestions2) {
          document
            .getElementById(`step-${currentQuestion}`)
            .classList.remove("active");
          currentQuestion++;
          progressNumber.textContent = currentQuestion - 1;
          switch (currentQuestion) {
            case 1:
              progressBar.style.width = "00%";
              // delete
              fake3.style.display = "flex";
              fake4.style.display = "none";

              break;
            case 2:
              progressBar.style.width = "33%";
              // delete
              fake3.style.display = "none";
              fake4.style.display = "none";

              break;
            case 3:
              progressBar.style.width = "66%";
              // delete
              fake3.style.display = "none";
              fake4.style.display = "flex";

              break;
            default:
          }

          document
            .getElementById(`step-${currentQuestion}`)
            .classList.add("active");
        }
      });

      document.getElementById("prevBtn2").addEventListener("click", () => {
        if (currentQuestion > 1) {
          document
            .getElementById(`step-${currentQuestion}`)
            .classList.remove("active");
          currentQuestion--;
          progressNumber.textContent = currentQuestion - 1;

          switch (currentQuestion) {
            case 1:
              progressBar.style.width = "00%";
              // delete
              fake3.style.display = "flex";
              fake4.style.display = "none";

              break;
            case 2:
              progressBar.style.width = "33%";
              // delete
              fake3.style.display = "none";
              fake4.style.display = "none";

              break;
            case 3:
              progressBar.style.width = "66%";
              // delete
              fake3.style.display = "none";
              fake4.style.display = "flex";

              break;
            default:
          }
          document
            .getElementById(`step-${currentQuestion}`)
            .classList.add("active");
        }
      });
    }
  }
  quizInit();

  function selectChoices() {
    if (document.querySelectorAll(".single-choice")) {
      document.querySelectorAll(".single-choice").forEach((wrapper) => {
        wrapper.addEventListener("click", (event) => {
          if (event.target.classList.contains("single-choice__item")) {
            // Удаляем класс 'active' у всех элементов .single-choice__item в текущей обертке .single-choice
            wrapper.querySelectorAll(".single-choice__item").forEach((item) => {
              item.classList.remove("active");
            });

            // Добавляем класс 'active' к нажатому элементу
            event.target.classList.add("active");
          }
        });
      });
      // Находим все элементы с классом .multy-choice__item
      const multyChoiceItems = document.querySelectorAll(".multy-choice__item");

      // Добавляем обработчик события click для каждого элемента
      multyChoiceItems.forEach((item) => {
        item.addEventListener("click", () => {
          // Переключаем класс .active
          item.classList.toggle("active");
        });
      });
    }
  }
  selectChoices();
};
