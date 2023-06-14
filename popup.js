export default class Popup {
  constructor({ popupSelector, popupVisibleSelector, popupBtnCloseSelector }) {
    this._popup = document.querySelector(popupSelector);
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this._setEscHandler = this._setEscHandler.bind(this);
    this.setEventListeners = this.setEventListeners.bind(this);
    this._popupVisibleSelector = popupVisibleSelector;
    this._popupBtnCloseSelector = popupBtnCloseSelector;
  }

  openPopup() {
    this._popup.classList.add(this._popupVisibleSelector.substring(1));
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", this._setEscHandler);
  }

  closePopup() {
    this._popup.classList.remove(this._popupVisibleSelector.substring(1));
    document.body.style.overflow = "";
    document.removeEventListener("keydown", this._setEscHandler);
  }

  _setEscHandler(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains(
          this._popupVisibleSelector.substring(1)
        ) ||
        evt.target.classList.contains(this._popupBtnCloseSelector.substring(1))
      ) {
        this.closePopup();
      }
    });
  }
}
