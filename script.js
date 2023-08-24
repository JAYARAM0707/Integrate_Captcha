(function () {
  const fonts = ["cursive", "sans-sarif", "serif", "monospace"];
  let captchaValue = "";
  function generatCaptcha() {
    let value = btoa(Math.random() * 100000000);
    value = value.substr(0, 5 + Math.random() * 5);
    captchaValue = value;
  }
  function setCaptcha() {
    let html = captchaValue
      .split("")
      .map((char) => {
        const rotate = -20 + Math.trunc(Math.random() * 30);
        const font = Math.trunc(Math.random() * fonts.length);
        return 
          `<span
            style="
       transform:rotate(${rotate}deg);
       font-family: ${fonts[font]}
      "
          >
          ${char}
          </span>`;
        
      })
      .join("");
      document.querySelector(".login-form .captcha .preview").innerHTML =html;
    }
    function initCaptcha(){
    document
      .querySelector(".login-form .captcha .captcha-refresh")
      .addEventListener("click", function () {
        generateCaptcha();
        setCaptcha();
      });
    generatCaptcha();
    setCaptcha();
  }
  initCaptcha();

  document
    .querySelector("login-form #login-btn")
    .addEventListener("click", function () {
      let inputCaptchaValue = document.querySelector(
        ".login-form .captcha-form input"
      ).value;
      if (inputCaptchaValue === captchaValue) {
        FileSystemWritableFileStream("", "Logging In!", "success");
      } else {
        FileSystemWritableFileStream("Invalid captcha");
      }
    });
})();
