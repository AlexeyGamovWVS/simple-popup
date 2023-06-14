import "../../front-scss/pages/compets.scss";
import setGsapHorizontalScroll from "../components/directionsHorScroll";
import Popup from "../components/popup";
import "../utils/utils";

const scrollTriggerParams = {
  itemSelector: ".directions-compets__card",
  triggerSelector: ".directions-compets__cards",
  breakPoints: {
    tb: 1199,
    ts: 991,
    mb: 767,
    ms: 575,
  },
};

setGsapHorizontalScroll(scrollTriggerParams);

const popupData = {
  popupSelector: ".popup-two-column",
  popupVisibleSelector: ".popup-two-column_visible",
  popupBtnCloseSelector: ".popup-two-column__close-button",
};

const directionPopup = new Popup(popupData);
directionPopup.setEventListeners();

const directonsSection = document.querySelector(".opportunity-compets");
const directionsButtonClass = "card-opportunity__link";

directonsSection.addEventListener("click", (e) => {
  if (e.target.classList.contains(directionsButtonClass)) {
    // либо здесь либо в php должно быть обновление контента в поп-ап окне c привязкой к тому элементу, по которому кликнули.
    directionPopup.openPopup();
  }
});
