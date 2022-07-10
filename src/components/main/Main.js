import "./main.scss";
import updateSessionStorage from "../../common/updateSessionStorage";
import run from "../../common/run";
class Main {
  apply() {
    const html_code = document
      .getElementById("htmlCode")
      .querySelector("textarea");
    const css_code = document
      .getElementById("cssCode")
      .querySelector("textarea");
    const js_code = document.getElementById("jsCode").querySelector("textarea");
    const runBtn = document.querySelector(".main__wrap__buttons__runBtn");
    const minimizeBtn = document.querySelector(
      ".main__wrap__buttons__minimize"
    );

    html_code.value = sessionStorage.getItem("html_code") || " ";
    css_code.value = sessionStorage.getItem("css_code") || " ";
    js_code.value = sessionStorage.getItem("js_code") || " ";
    run();

    html_code.onkeyup = () => updateSessionStorage();
    css_code.onkeyup = () => updateSessionStorage();
    js_code.onkeyup = () => updateSessionStorage();

    runBtn.addEventListener("click", () => {
      run();
    });

    minimizeBtn.addEventListener("click", () => {
      const codeEditorWrapper = document.querySelector(".main__wrap");
      codeEditorWrapper.classList.toggle("main__wrap--minimize");
      if (codeEditorWrapper.classList.length === 1) {
        minimizeBtn.innerHTML = "minimize";
      } else {
        minimizeBtn.innerHTML = "maximize";
      }
    });

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        run();
      }
    });
  }
}
export default Main;
