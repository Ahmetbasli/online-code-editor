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
    const overlay = document.querySelector(".overlay");
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

    saveBtn.addEventListener("click", () => {
      overlay.classList.add("overlay--active");
    });

    historySelect.addEventListener("change", () => {
      if (
        localStorage.getItem("history") === null ||
        historySelect.value === "default"
      ) {
        html_code.value = "";
        css_code.value = "";
        js_code.value = "";
        updateSessionStorage();
        run();
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
