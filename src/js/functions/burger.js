import { disableScroll } from "./disable-scroll";
import { enableScroll } from "./enable-scroll";

export const burger = () => {
  const burger = document?.querySelector("[data-burger]"),
    menu = document?.querySelector("[data-menu]"),
    overlay = document?.querySelector("[data-overlay]"),
    wrapper1 = document?.querySelector(".wrapper"),
    wrapper2 = document?.querySelector(".header__wrapper");

  if (burger) {
    function moveMenu() {
      if (window.innerWidth < 992) {
        wrapper1.append(menu);
        wrapper1.append(burger);
      } else {
        wrapper2.append(menu);
        wrapper2.append(burger);
      }
    }
    moveMenu();
    window.addEventListener("resize", moveMenu);

    burger?.addEventListener("click", () => {
      // Change classess
      burger?.classList.toggle("burger--active");
      menu?.classList.toggle("menu--active");

      if (menu?.classList.contains("menu--active")) {
        // Setting aria attributes
        burger?.setAttribute("aria-expanded", "true");
        burger?.setAttribute("aria-label", "Закрыть меню");

        // Change overlay activness
        overlay?.setAttribute("data-overlay", "true");

        // Disabling scroll
        disableScroll();
      } else {
        // Setting aria attributes
        burger?.setAttribute("aria-expanded", "false");
        burger?.setAttribute("aria-label", "Открыть меню");

        // Change overlay activness
        overlay?.setAttribute("data-overlay", "false");

        // Enabling scroll
        enableScroll();
      }
    });

    overlay?.addEventListener("click", (e) => {
      if (e.target && e.target.hasAttribute("data-overlay")) {
        // Setting aria attributes
        burger?.setAttribute("aria-expanded", "false");
        burger?.setAttribute("aria-label", "Открыть меню");

        // Change overlay activness
        overlay?.setAttribute("data-overlay", "false");

        // Change classess
        burger?.classList.remove("burger--active");
        menu?.classList.remove("menu--active");

        // Enabling scroll
        enableScroll();
      }
    });

    menu?.addEventListener("click", (e) => {
      if (e.target.hasAttribute("data-menu-item")) {
        // Setting aria attributes
        burger?.setAttribute("aria-expanded", "false");
        burger?.setAttribute("aria-label", "Открыть меню");

        // Change overlay activness
        overlay?.setAttribute("data-overlay", "false");

        // Change classess
        burger.classList.remove("burger--active");
        menu.classList.remove("menu--active");

        // Enabling scroll
        enableScroll();
      }
    });

    const movableElement = document?.querySelector(".header__btn");
    const container1 = document?.querySelector(".header__wrapper");
    const container2 = document?.querySelector(".menu");

    function moveElement() {
      if (window.innerWidth < 992) {
        container2.appendChild(movableElement);
      } else {
        container1.appendChild(movableElement);
      }
    }

    window.addEventListener("resize", moveElement);
    moveElement(); // Initial check when the page loads
  }
};
