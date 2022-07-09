import "./header.scss";
import run from "../../common/run";
import updateSessionStorage from "../../common/updateSessionStorage";
class Header {
  apply() {
    const html_code = document
      .getElementById("htmlCode")
      .querySelector("textarea");
    const css_code = document
      .getElementById("cssCode")
      .querySelector("textarea");
    const js_code = document.getElementById("jsCode").querySelector("textarea");
    const saveBtn = document.querySelector(".header__button");
    const inputInsidePopup = document.querySelector(".popup__input");
    const saveBtnInsidePopup = document.querySelector(".popup__btn");
    const overlay = document.querySelector(".overlay");
    const popUpCloseBtn = document.querySelector(".popup__close");
    const historySelect = document.getElementById("history");

    const setUpSelect = () => {
      if (localStorage.getItem("history") === null) return;

      const historyArr = JSON.parse(localStorage.getItem("history"));

      historyArr.forEach((element, index) => {
        const id = Object.keys(element)[0];
        const name = Object.keys(element)[1];
        const newOption = document.createElement("option");
        newOption.value = index;
        newOption.innerHTML = name;
        historySelect.appendChild(newOption);
      });
    };
    setUpSelect();

    // save btn
    // save button
    saveBtn.addEventListener("click", () => {
      overlay.classList.add("overlay--active");
    });
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
    // popupClose btn
    popUpCloseBtn.addEventListener("click", () => {
      overlay.classList.remove("overlay--active");
    });

    // on select Change
    historySelect.addEventListener("change", () => {
      if (
        localStorage.getItem("history") === null ||
        historySelect.value === "default"
      ) {
        return;
      }
      const historyArr = JSON.parse(localStorage.getItem("history"));

      const selectedHistory = historyArr[historySelect.value];

      const selectValues = selectedHistory[Object.keys(selectedHistory)[1]];
      html_code.value = selectValues.html;
      css_code.value = selectValues.css;
      js_code.value = selectValues.js;
      updateSessionStorage();
      run();
    });
  }
}

export default Header;
