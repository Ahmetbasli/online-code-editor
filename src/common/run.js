const run = () => {
  // Executing HTML, CSS & JS code
  content.contentDocument.body.innerHTML = `<style>${
    sessionStorage.css_code
  }</style> ${sessionStorage.html_code || ""}`;

  try {
    content.contentWindow.eval(sessionStorage.js_code);
  } catch (err) {
    console.log(err);
  }
};
export default run;
