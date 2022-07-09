import "./popup.scss";
class Popup {
  apply() {
    const inputInsidePopup = document.querySelector(".popup__input");
    const saveBtnInsidePopup = document.querySelector(".popup__btn");
    const overlay = document.querySelector(".overlay");
    const popUpCloseBtn = document.querySelector(".popup__close");
    const historySelect = document.getElementById("history");

    saveBtnInsidePopup.addEventListener("click", () => {
      const name = inputInsidePopup.value || "noName";
      const code = {
        html: sessionStorage.getItem("html_code"),
        css: sessionStorage.getItem("css_code"),
        js: sessionStorage.getItem("js_code"),
      };

      const item = {
        id: new Date().valueOf(),
        [`${name}`]: code,
      };

      if (localStorage.getItem("history") === null) {
        const historyArr = [item];
        localStorage.setItem("history", JSON.stringify(historyArr));
      } else {
        const historyArr = JSON.parse(localStorage.getItem("history"));
        historyArr.push(item);
        localStorage.setItem("history", JSON.stringify(historyArr));
      }

      const newOption = document.createElement("option");
      newOption.value = historySelect.children.length - 1;
      newOption.innerHTML = name;
      historySelect.appendChild(newOption);

      overlay.classList.remove("overlay--active");
      inputInsidePopup.value = "";
    });

    popUpCloseBtn.addEventListener("click", () => {
      overlay.classList.remove("overlay--active");
    });
  }
}
export default Popup;
