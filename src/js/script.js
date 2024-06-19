"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import {
  mobileCheck,
  burger,
  accordion,
  swiper,
  quiz,
  offerAnimations,
  modals,
  uploadFilesModal,
} from "./functions/";

// Components
// import { formValidation } from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  accordion(
    ".faq__list",
    "faq__title",
    ".faq__item",
    "faq__item--active",
    false
  );
  // grain();
  quiz();
  burger();
  swiper();
  offerAnimations();
  modals();
  uploadFilesModal();
});
