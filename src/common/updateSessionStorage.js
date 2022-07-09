const html_code = document.getElementById("htmlCode").querySelector("textarea");
const css_code = document.getElementById("cssCode").querySelector("textarea");
const js_code = document.getElementById("jsCode").querySelector("textarea");

const updateSessionStorage = () => {
  sessionStorage.setItem("html_code", html_code.value);
  sessionStorage.setItem("css_code", css_code.value);
  sessionStorage.setItem("js_code", js_code.value);
};
export default updateSessionStorage;
